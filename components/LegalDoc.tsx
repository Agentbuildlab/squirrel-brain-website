import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// Server-rendered shell for markdown documents (privacy policy, terms, support).
// `html` comes from our own repo files (legal/*.md), never from user input.
export default function LegalDoc({ html }: { html: string }) {
  return (
    <>
      <Nav />
      <main id="main-content" className="pt-28 pb-20 bg-bg">
        <article
          className={[
            "max-w-3xl mx-auto px-4 sm:px-6 text-ink leading-relaxed",
            "[&_h1]:font-display [&_h1]:text-4xl [&_h1]:font-extrabold [&_h1]:mb-4",
            "[&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:pt-6 [&_h2]:border-t [&_h2]:border-border",
            "[&_h3]:text-lg [&_h3]:font-bold [&_h3]:mt-7 [&_h3]:mb-2",
            "[&_h4]:text-base [&_h4]:font-bold [&_h4]:mt-5 [&_h4]:mb-2",
            "[&_p]:mb-4 [&_p]:text-[15px]",
            "[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4",
            "[&_li]:mb-1.5 [&_li]:text-[15px]",
            "[&_a]:text-accent [&_a:hover]:underline",
            "[&_hr]:my-8 [&_hr]:border-border",
            "[&_blockquote]:border-l-4 [&_blockquote]:border-accent [&_blockquote]:pl-4 [&_blockquote]:my-5",
            "[&_table]:block [&_table]:overflow-x-auto [&_table]:w-full [&_table]:my-5 [&_table]:text-sm",
            "[&_th]:text-left [&_th]:font-bold [&_th]:p-2.5 [&_th]:border [&_th]:border-border [&_th]:bg-card",
            "[&_td]:p-2.5 [&_td]:align-top [&_td]:border [&_td]:border-border",
            "[&_code]:text-xs [&_code]:bg-card [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded",
          ].join(" ")}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </main>
      <Footer />
    </>
  );
}
