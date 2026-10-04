import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// Typography for server-rendered Markdown (no @tailwindcss/typography plugin in this repo).
const PROSE = [
  "text-[15px] leading-relaxed text-ink/80",
  "[&_h1]:font-display [&_h1]:text-4xl [&_h1]:font-extrabold [&_h1]:text-ink [&_h1]:mb-4",
  "[&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-ink [&_h2]:mt-10 [&_h2]:mb-3",
  "[&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-ink [&_h3]:mt-7 [&_h3]:mb-2",
  "[&_h4]:text-base [&_h4]:font-semibold [&_h4]:text-ink [&_h4]:mt-5 [&_h4]:mb-2",
  "[&_p]:mb-4",
  "[&_strong]:text-ink",
  "[&_a]:text-accent [&_a]:underline [&_a:hover]:opacity-80",
  "[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_li]:mb-1.5",
  "[&_hr]:my-8 [&_hr]:border-border",
  "[&_blockquote]:border-l-4 [&_blockquote]:border-accent [&_blockquote]:bg-accent-light [&_blockquote]:px-4 [&_blockquote]:py-3 [&_blockquote]:my-5 [&_blockquote_p]:mb-0",
  "[&_code]:rounded [&_code]:bg-card [&_code]:border [&_code]:border-border [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[13px]",
  "[&_table]:w-full [&_table]:my-6 [&_table]:text-sm [&_table]:block [&_table]:overflow-x-auto",
  "[&_th]:bg-card [&_th]:text-ink [&_th]:font-semibold [&_th]:text-left [&_th]:p-2.5 [&_th]:border [&_th]:border-border",
  "[&_td]:p-2.5 [&_td]:border [&_td]:border-border [&_td]:align-top",
].join(" ");

export default function MarkdownPage({ html }: { html: string }) {
  return (
    <>
      <Nav />
      <main id="main-content" className="pt-28 pb-20">
        <article
          className={`max-w-3xl mx-auto px-4 sm:px-6 ${PROSE}`}
          // First-party Markdown rendered on the server from files committed in this repo.
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </main>
      <Footer />
    </>
  );
}
