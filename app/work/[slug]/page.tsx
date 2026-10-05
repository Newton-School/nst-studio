import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseStudyThemeToggle } from "@/components/case-study-theme-toggle";
import { MarkdownContent } from "@/components/markdown-content";
import { getCaseStudy, getCaseStudySlugs } from "@/lib/case-studies";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.name} case study | NST Studio`,
    description: study.problem,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return <>
    <header className="case-nav"><div className="container"><Link className="logo" href="/" aria-label="NST Studio home"><span className="logo-mark">N</span><span>NST <b>Studio</b></span></Link><div><Link className="case-back" href="/#work">← All work</Link><CaseStudyThemeToggle/><Link className="button primary case-book" href="/#booking">Book a scoping call</Link></div></div></header>
    <main className="case-page">
      <section className="case-hero"><div className="container"><span className="eyebrow">CASE STUDY · {study.industry}</span><h1>{study.name}</h1><p>{study.problem}</p><div className="case-hero-tags">{study.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></section>
      <section className="case-summary"><div className="container"><div><span>WHAT WE BUILT</span><p>{study.build}</p></div><div><span>KEY RESULT</span><p>{study.result}</p></div></div></section>
      <article className="case-article container"><MarkdownContent content={study.content}/></article>
      <section className="case-cta"><div className="container"><span className="eyebrow">HAVE A SIMILAR PROBLEM?</span><h2>Tell us what you’re building.</h2><p>Use a 20-minute scoping call to identify the smallest useful first release.</p><Link className="button primary large" href="/#booking">Book a 20-min scoping call</Link></div></section>
    </main>
    <footer className="case-footer"><div className="container"><span>NST Studio</span><span>A Newton School of Technology initiative</span></div></footer>
  </>;
}
