import type { ReactNode } from "react";

type BlogLayoutProps = {
  children: ReactNode;
};

export const metadata = {
  title: "Blog | Practice Projects",
  description: "Demo blog layout for practising Next.js app router features.",
};

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="border-b border-neutral-800 py-6 px-8">
        <p className="text-sm uppercase tracking-[0.4em] text-neutral-400">
          Practice Projects
        </p>
        <h1 className="mt-2 text-4xl font-semibold">Insightful Blog</h1>
        <p className="mt-2 text-neutral-400 max-w-2xl">
          Discover curated articles, tutorials, and musings from the world of
          web development and design.
        </p>
      </header>
      <main className="flex-1 px-8 py-12">
        <section className="mx-auto max-w-5xl space-y-10">{children}</section>
      </main>
      <footer className="border-t border-neutral-800 py-6 px-8 text-sm text-neutral-500">
        © {new Date().getFullYear()} Practice Projects. Built with Next.js and
        TypeScript.
      </footer>
    </div>
  );
}
