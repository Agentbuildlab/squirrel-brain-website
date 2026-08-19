(() => {
  "use strict";

  const STORAGE_KEY = "sb_pixel_intro_seen";
  const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
  const MARK_SRC = "/assets/squirrel_logo.png";
  const BACKGROUND = "radial-gradient(ellipse 100% 80% at 50% -15%, #FFF0E6 0%, #faf6f0 55%, #f8f4ee 100%)";
  const INK = "#412D22";
  const MAX_PARTICLES = 2000;
  const FADE_MS = 450;
  const CRISP_HOLD_MS = 650;
  const HARD_TIMEOUT_MS = 5500;
  const REPEL_RADIUS = 64;

  let motionPreference = null;
  try {
    motionPreference = window.matchMedia
      ? window.matchMedia(REDUCED_MOTION_QUERY)
      : null;
    if (motionPreference && motionPreference.matches) return;
    if (window.sessionStorage.getItem(STORAGE_KEY)) return;
    window.sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    return;
  }

  let overlay;
  let canvas;
  let context;
  let image;
  let animationFrame = 0;
  let fadeTimer = 0;
  let destroyed = false;
  let dismissing = false;
  let landingLocked = false;
  let runtimeStopped = false;
  let startedAt = 0;
  let viewportWidth = 0;
  let viewportHeight = 0;
  let particleSize = 0;
  let layout = null;
  const particles = [];
  const timers = new Set();
  const listeners = [];
  const pointer = { active: false, x: 0, y: 0 };

  const schedule = (callback, delay) => {
    const timer = window.setTimeout(() => {
      timers.delete(timer);
      if (!destroyed && !runtimeStopped) callback();
    }, delay);
    timers.add(timer);
    return timer;
  };

  const listen = (target, type, handler, options) => {
    target.addEventListener(type, handler, options);
    listeners.push({ target, type, handler, options });
  };

  const stopRuntime = () => {
    if (runtimeStopped) return;
    runtimeStopped = true;

    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
    }

    timers.forEach((timer) => window.clearTimeout(timer));
    timers.clear();

    listeners.forEach(({ target, type, handler, options, legacy }) => {
      if (legacy && typeof target.removeListener === "function") {
        target.removeListener(handler);
      } else {
        target.removeEventListener(type, handler, options);
      }
    });
    listeners.length = 0;

    if (image) {
      image.onload = null;
      image.onerror = null;
    }
  };

  const removeImmediately = () => {
    if (destroyed) return;
    destroyed = true;
    stopRuntime();
    if (fadeTimer) window.clearTimeout(fadeTimer);
    fadeTimer = 0;
    if (overlay && overlay.isConnected) overlay.remove();
  };

  const beginDismissal = () => {
    if (destroyed || dismissing) return;
    dismissing = true;
    if (overlay) overlay.dataset.phase = "fading";
    stopRuntime();

    if (!overlay || !overlay.isConnected) {
      removeImmediately();
      return;
    }

    overlay.style.pointerEvents = "none";
    overlay.style.opacity = "0";
    fadeTimer = window.setTimeout(removeImmediately, FADE_MS);
  };

  const edgePosition = (buffer) => {
    const edge = Math.floor(Math.random() * 4);
    if (edge === 0) return { x: Math.random() * viewportWidth, y: -buffer };
    if (edge === 1) return { x: viewportWidth + buffer, y: Math.random() * viewportHeight };
    if (edge === 2) return { x: Math.random() * viewportWidth, y: viewportHeight + buffer };
    return { x: -buffer, y: Math.random() * viewportHeight };
  };

  const computeLayout = (gridSize) => {
    const isCompact = Math.min(viewportWidth, viewportHeight) < 520;
    const sizeCap = isCompact ? 280 : 360;
    const iconSize = Math.round(Math.min(sizeCap, Math.min(viewportWidth, viewportHeight) * 0.68));
    return {
      gridSize,
      iconSize,
      iconLeft: Math.round((viewportWidth - iconSize) / 2),
      iconTop: Math.round((viewportHeight - iconSize) / 2),
      cellSize: iconSize / gridSize,
    };
  };

  const positionLandedMark = () => {
    if (!image || !layout) return;
    image.style.left = `${layout.iconLeft}px`;
    image.style.top = `${layout.iconTop}px`;
    image.style.width = `${layout.iconSize}px`;
    image.style.height = `${layout.iconSize}px`;
  };

  const resizeCanvas = () => {
    viewportWidth = Math.max(1, window.innerWidth);
    viewportHeight = Math.max(1, window.innerHeight);
    const dpr = Math.min(Math.max(window.devicePixelRatio || 1, 1), 2);
    const previousLayout = layout;

    canvas.width = Math.round(viewportWidth * dpr);
    canvas.height = Math.round(viewportHeight * dpr);
    canvas.style.width = `${viewportWidth}px`;
    canvas.style.height = `${viewportHeight}px`;
    canvas.dataset.dpr = String(dpr);
    context.setTransform(dpr, 0, 0, dpr, 0, 0);

    const gridSize = previousLayout
      ? previousLayout.gridSize
      : (Math.min(viewportWidth, viewportHeight) < 520 ? 44 : 52);
    layout = computeLayout(gridSize);
    particleSize = Math.max(2, layout.cellSize * 0.84);
    positionLandedMark();

    if (!previousLayout) return;
    for (let index = 0; index < particles.length; index += 1) {
      const particle = particles[index];
      particle.homeX = layout.iconLeft + (particle.column + 0.5) * layout.cellSize;
      particle.homeY = layout.iconTop + (particle.row + 0.5) * layout.cellSize;
      if (particle.settled || landingLocked) {
        particle.x = particle.homeX;
        particle.y = particle.homeY;
      }
    }
  };

  const buildParticles = () => {
    const gridSize = layout.gridSize;
    const sampleCanvas = document.createElement("canvas");
    sampleCanvas.width = gridSize;
    sampleCanvas.height = gridSize;
    const sampleContext = sampleCanvas.getContext("2d", { willReadFrequently: true });
    if (!sampleContext) throw new Error("Pixel intro sample canvas is unavailable");

    sampleContext.drawImage(image, 0, 0, gridSize, gridSize);
    const sampled = sampleContext.getImageData(0, 0, gridSize, gridSize).data;
    const center = gridSize / 2;
    const maxRadius = Math.hypot(center, center);

    for (let row = 0; row < gridSize && particles.length < MAX_PARTICLES; row += 1) {
      for (let column = 0; column < gridSize && particles.length < MAX_PARTICLES; column += 1) {
        const offset = (row * gridSize + column) * 4;
        if (sampled[offset + 3] <= 40) continue;

        const origin = edgePosition(layout.cellSize + 24);
        const radius = Math.hypot(column + 0.5 - center, row + 0.5 - center) / maxRadius;
        particles.push({
          column,
          row,
          x: origin.x,
          y: origin.y,
          startX: origin.x,
          startY: origin.y,
          homeX: layout.iconLeft + (column + 0.5) * layout.cellSize,
          homeY: layout.iconTop + (row + 0.5) * layout.cellSize,
          velocityX: 0,
          velocityY: 0,
          delay: (1 - Math.min(radius, 1)) * 220 + Math.random() * 60,
          duration: 1100 + Math.random() * 250,
          settled: false,
          color: `rgba(${sampled[offset]},${sampled[offset + 1]},${sampled[offset + 2]},${sampled[offset + 3] / 255})`,
        });
      }
    }

    if (!particles.length) throw new Error("Pixel intro mark produced no particles");
    overlay.dataset.particleCount = String(particles.length);
    overlay.dataset.gridSize = String(gridSize);
  };

  const easeOutCubic = (value) => 1 - ((1 - value) ** 3);

  const lockLanding = () => {
    if (landingLocked) return;
    landingLocked = true;
    pointer.active = false;
    overlay.dataset.phase = "landed";

    for (let index = 0; index < particles.length; index += 1) {
      const particle = particles[index];
      particle.x = particle.homeX;
      particle.y = particle.homeY;
      particle.velocityX = 0;
      particle.velocityY = 0;
    }

    canvas.style.opacity = "0";
    image.style.opacity = "1";
    schedule(beginDismissal, CRISP_HOLD_MS);
  };

  const renderParticle = (particle, supportsRoundRect) => {
    const half = particleSize / 2;
    context.fillStyle = particle.color;
    if (supportsRoundRect) {
      context.beginPath();
      context.roundRect(
        particle.x - half,
        particle.y - half,
        particleSize,
        particleSize,
        Math.max(1, particleSize * 0.2),
      );
      context.fill();
      return;
    }
    context.fillRect(particle.x - half, particle.y - half, particleSize, particleSize);
  };

  const animate = (now) => {
    if (destroyed || runtimeStopped) return;

    try {
      const elapsed = now - startedAt;
      const supportsRoundRect = typeof context.roundRect === "function";
      context.clearRect(0, 0, viewportWidth, viewportHeight);
      let allSettled = particles.length > 0;

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];
        const localElapsed = elapsed - particle.delay;

        if (!particle.settled) {
          const progress = Math.max(0, Math.min(1, localElapsed / particle.duration));
          const eased = easeOutCubic(progress);
          particle.x = particle.startX + (particle.homeX - particle.startX) * eased;
          particle.y = particle.startY + (particle.homeY - particle.startY) * eased;
          if (progress >= 1) {
            particle.settled = true;
            particle.x = particle.homeX;
            particle.y = particle.homeY;
          }
        } else if (pointer.active) {
          const deltaX = particle.x - pointer.x;
          const deltaY = particle.y - pointer.y;
          const distanceSquared = deltaX * deltaX + deltaY * deltaY;
          if (distanceSquared > 0 && distanceSquared < REPEL_RADIUS * REPEL_RADIUS) {
            const distance = Math.sqrt(distanceSquared);
            const influence = 1 - distance / REPEL_RADIUS;
            particle.velocityX += (deltaX / distance) * influence * 1.2;
            particle.velocityY += (deltaY / distance) * influence * 1.2;
          }
        }

        if (particle.settled) {
          particle.velocityX += (particle.homeX - particle.x) * 0.06;
          particle.velocityY += (particle.homeY - particle.y) * 0.06;
          particle.velocityX *= 0.8;
          particle.velocityY *= 0.8;
          particle.x += particle.velocityX;
          particle.y += particle.velocityY;
        } else {
          allSettled = false;
        }

        renderParticle(particle, supportsRoundRect);
      }

      if (allSettled) {
        lockLanding();
        animationFrame = 0;
        return;
      }

      animationFrame = window.requestAnimationFrame(animate);
    } catch {
      removeImmediately();
    }
  };

  try {
    overlay = document.createElement("div");
    overlay.dataset.sbPixelIntro = "";
    overlay.dataset.phase = "loading";
    overlay.style.cssText = [
      "position:fixed",
      "inset:0",
      "z-index:2147483647",
      "overflow:hidden",
      `background:${BACKGROUND}`,
      "opacity:1",
      `transition:opacity ${FADE_MS}ms cubic-bezier(.22,.61,.36,1)`,
      "font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,sans-serif",
      `color:${INK}`,
      "cursor:default",
    ].join(";");

    const focusStyle = document.createElement("style");
    focusStyle.textContent = [
      "[data-sb-pixel-skip]:focus-visible{outline:3px solid #D96C43;outline-offset:4px}",
      "[data-sb-pixel-skip]:hover{border-color:#412D22;background:rgba(65,45,34,.08)}",
    ].join("");
    overlay.appendChild(focusStyle);

    canvas = document.createElement("canvas");
    canvas.dataset.sbPixelCanvas = "";
    canvas.setAttribute("aria-hidden", "true");
    canvas.style.cssText = "position:absolute;inset:0;display:block;width:100%;height:100%;opacity:1;transition:opacity 180ms ease";
    overlay.appendChild(canvas);

    image = new Image();
    image.decoding = "async";
    image.alt = "";
    image.setAttribute("aria-hidden", "true");
    image.style.cssText = [
      "position:absolute",
      "display:block",
      "object-fit:contain",
      "opacity:0",
      "transition:opacity 180ms ease",
      "pointer-events:none",
      "image-rendering:auto",
    ].join(";");
    overlay.appendChild(image);

    const skip = document.createElement("button");
    skip.type = "button";
    skip.dataset.sbPixelSkip = "";
    skip.textContent = "Skip";
    skip.setAttribute("aria-label", "Skip intro");
    skip.style.cssText = [
      "position:absolute",
      "right:max(18px,env(safe-area-inset-right))",
      "bottom:max(18px,env(safe-area-inset-bottom))",
      "z-index:2",
      "min-width:44px",
      "min-height:44px",
      "padding:10px 12px",
      "border:1px solid rgba(65,45,34,.45)",
      "border-radius:999px",
      "background:rgba(250,246,240,.82)",
      `color:${INK}`,
      "font:600 .82rem/1 -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,sans-serif",
      "letter-spacing:.02em",
      "cursor:pointer",
      "-webkit-tap-highlight-color:transparent",
    ].join(";");
    overlay.appendChild(skip);

    context = canvas.getContext("2d", { alpha: true });
    if (!context || !document.body) throw new Error("Pixel intro canvas is unavailable");

    document.body.appendChild(overlay);
    resizeCanvas();

    const onPointerMove = (event) => {
      if (event.pointerType === "touch") return;
      pointer.active = true;
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };
    const onPointerLeave = () => { pointer.active = false; };
    const onKeyDown = (event) => {
      if (event.key === "Tab" || event.metaKey || event.ctrlKey || event.altKey) return;
      beginDismissal();
    };
    const onResize = () => {
      try {
        resizeCanvas();
      } catch {
        removeImmediately();
      }
    };
    const onMotionChange = (event) => {
      if (event.matches) removeImmediately();
    };
    const onVisibilityChange = () => {
      if (document.hidden) removeImmediately();
    };

    listen(overlay, "click", beginDismissal);
    listen(overlay, "pointermove", onPointerMove, { passive: true });
    listen(overlay, "pointerleave", onPointerLeave, { passive: true });
    listen(window, "keydown", onKeyDown, true);
    listen(window, "wheel", beginDismissal, { passive: true, capture: true });
    listen(window, "touchmove", beginDismissal, { passive: true, capture: true });
    listen(window, "scroll", beginDismissal, { passive: true, capture: true });
    listen(window, "resize", onResize, { passive: true });
    listen(window, "pagehide", removeImmediately, { passive: true });
    listen(document, "visibilitychange", onVisibilityChange, { passive: true });

    if (motionPreference) {
      if (typeof motionPreference.addEventListener === "function") {
        listen(motionPreference, "change", onMotionChange);
      } else if (typeof motionPreference.addListener === "function") {
        motionPreference.addListener(onMotionChange);
        listeners.push({ target: motionPreference, type: "change", handler: onMotionChange, legacy: true });
      }
    }

    schedule(removeImmediately, HARD_TIMEOUT_MS);

    image.onload = () => {
      if (destroyed || runtimeStopped) return;
      try {
        buildParticles();
        overlay.dataset.phase = "animating";
        startedAt = performance.now();
        animationFrame = window.requestAnimationFrame(animate);
      } catch {
        removeImmediately();
      }
    };
    image.onerror = removeImmediately;
    image.src = MARK_SRC;
  } catch {
    removeImmediately();
  }
})();
