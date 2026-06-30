// Domain-ownership proof for the official MCP Registry (HTTP verification).
// The registry fetches this exact URL and reads the Ed25519 public-key proof to
// confirm squirrelbrainapp.com owns the `com.squirrelbrainapp/*` namespace.
// This is a PUBLIC proof string (a public key), not a secret.
export const dynamic = "force-static";

export function GET() {
  return new Response(
    "v=MCPv1; k=ed25519; p=yLZxUHSdQNTZNZ8Atm85LLT2MvtxhiJ2/InAkuuZ3Xk=\n",
    { headers: { "content-type": "text/plain; charset=utf-8" } }
  );
}
