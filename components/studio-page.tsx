"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { CaseStudySummary } from "@/content/case-study-types";
import { faqs, mentors, metrics, packages, process, services, stack } from "@/content/site";

const Arrow = () => <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M4 10h11M11 6l4 4-4 4" /></svg>;
const CalendarIcon = () => <svg aria-hidden="true" viewBox="0 0 20 20"><rect x="3" y="4.5" width="14" height="12" rx="2"/><path d="M6.5 2.5v4M13.5 2.5v4M3 8h14"/></svg>;

function Logo() {
  return <a className="logo" href="#top" aria-label="NST Studio home"><span className="logo-mark">N</span><span>NST <b>Studio</b></span></a>;
}

function Icon({ name }: { name: string }) {
  const common = { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 };
  if (name === "window") return <svg {...common} aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 8h18M7 6h.01"/></svg>;
  if (name === "workflow") return <svg {...common} aria-hidden="true"><rect x="3" y="4" width="7" height="6" rx="1"/><rect x="14" y="14" width="7" height="6" rx="1"/><path d="M10 7h3a4 4 0 0 1 4 4v3"/></svg>;
  if (name === "spark") return <svg {...common} aria-hidden="true"><path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z"/><path d="m18 3 .5 1.5L20 5l-1.5.5L18 7l-.5-1.5L16 5l1.5-.5L18 3Z"/></svg>;
  return <svg {...common} aria-hidden="true"><path d="M7 18h11a4 4 0 0 0 .5-8A6.5 6.5 0 0 0 6 8.5 4.8 4.8 0 0 0 7 18Z"/><path d="M9 14h6M12 11v6"/></svg>;
}

function ThemeControls({ compact = false }: { compact?: boolean }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    const savedTheme = localStorage.getItem("nst-theme") as "light" | "dark" | null;
    const nextTheme = savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);
  const changeTheme = () => { const value = theme === "light" ? "dark" : "light"; setTheme(value); document.documentElement.dataset.theme = value; localStorage.setItem("nst-theme", value); };
  return <div className={`theme-controls ${compact ? "compact" : ""}`} aria-label="Appearance controls">
    <button className="theme-toggle" onClick={changeTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
      <svg aria-hidden="true" viewBox="0 0 20 20"><path d={theme === "light" ? "M10 2v2M10 16v2M2 10h2M16 10h2M4.3 4.3l1.4 1.4M14.3 14.3l1.4 1.4M15.7 4.3l-1.4 1.4M5.7 14.3l-1.4 1.4M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" : "M17 12.5A7 7 0 0 1 7.5 3 7 7 0 1 0 17 12.5Z"}/></svg>
    </button>
  </div>;
}

function Navigation() {
  const [open, setOpen] = useState(false);
  return <header className="nav-wrap"><nav className="nav container" aria-label="Main navigation">
    <Logo />
    <div className="nav-links"><a href="#work">Work</a><a href="#how">How we work</a><a href="#packages">Packages</a><a href="#faq">FAQ</a></div>
    <div className="nav-actions"><ThemeControls compact/><a className="button primary nav-cta" href="#booking">Book a scoping call</a><button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu"><span/><span/></button></div>
    {open && <div className="mobile-menu" id="mobile-menu"><a onClick={() => setOpen(false)} href="#work">Work</a><a onClick={() => setOpen(false)} href="#how">How we work</a><a onClick={() => setOpen(false)} href="#packages">Packages</a><a onClick={() => setOpen(false)} href="#faq">FAQ</a><ThemeControls /></div>}
  </nav></header>;
}

function ArchitectureDiagram() {
  return <div className="architecture" role="img" aria-label="Architecture diagram connecting a client application through an API layer to a database and cloud services">
    <div className="diagram-bar"><span>REFERENCE ARCHITECTURE</span><span>PRODUCTION</span></div>
    <div className="diagram-stage">
      <div className="diagram-node client"><span className="node-id">01</span><strong>Client app</strong><small>Web · Mobile</small></div>
      <span className="connector c1"><i/></span>
      <div className="diagram-node api"><span className="node-id">02</span><strong>API layer</strong><small>Auth · Services</small></div>
      <span className="connector c2"><i/></span>
      <div className="diagram-node db"><span className="node-id">03</span><strong>Database</strong><small>PostgreSQL</small></div>
      <span className="connector vertical"><i/></span>
      <div className="diagram-node cloud"><span className="node-id">04</span><strong>Cloud</strong><small>CI/CD · Observability</small></div>
    </div>
    <div className="diagram-footer"><span><i className="status-dot"/>HEALTHY</span><span>MENTOR REVIEWED</span></div>
  </div>;
}

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) { return <article className={`card ${className}`}>{children}</article>; }
export function MetricStat({ value, label }: { value: string; label: string }) { return <div className="metric"><strong>{value}</strong><span>{label}</span></div>; }

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function ProductFrame({ label }: { label: string }) {
  return <div className="product-frame" role="img" aria-label={`Placeholder for real product screenshot: ${label}`}>
    <div className="frame-top"><span/><span/><span/><i/></div><div className="frame-body"><div className="frame-sidebar"><b/><b/><b/><b/></div><div className="frame-content"><div className="frame-title"/><div className="frame-stats"><i/><i/><i/></div><div className="frame-chart"><span/><span/><span/><span/><span/><span/><span/></div></div></div><em>SCREENSHOT PLACEHOLDER · {label}</em>
  </div>;
}

export function CaseStudyCard({ item }: { item: CaseStudySummary }) {
  return <Link className="case-card-link" href={`/work/${item.slug}`} aria-label={`View ${item.name} case study`}><Card className="case-card"><ProductFrame label={item.screen}/><div className="case-content"><div className="case-head"><h3>{item.name}</h3><span>{item.industry}</span></div><p className="problem">{item.problem}</p><p>{item.build}</p><div className="tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="result"><span>KEY RESULT</span><strong>{item.result}</strong></div><span className="case-link">View case study <Arrow/></span></div></Card></Link>;
}

export function MentorCard({ item, index }: { item: typeof mentors[number]; index: number }) {
  return <Card className="mentor-card"><div className="mentor-photo" role="img" aria-label={`Photo placeholder for ${item.name}`}><span>0{index + 1}</span><svg aria-hidden="true" viewBox="0 0 100 100"><circle cx="50" cy="38" r="17"/><path d="M20 91c2-22 14-34 30-34s28 12 30 34"/></svg><em>PHOTO PLACEHOLDER</em></div><div><h3>{item.name}</h3><span className="mentor-role">{item.role}</span><p>{item.experience}</p><div className="mentor-meta"><span>{item.years}</span><span className="linkedin" aria-label="LinkedIn link placeholder">in</span></div></div></Card>;
}

export function PackageCard({ item }: { item: typeof packages[number] }) {
  return <Card className={`package-card ${item.featured ? "featured" : ""}`}>{item.featured && <span className="featured-label">WHERE MOST CLIENTS START</span>}<div className="package-top"><h3>{item.title}</h3><span>{item.time}</span></div><p>{item.body}</p><strong className="price">{item.price}</strong><a className={`button ${item.featured ? "primary" : "secondary"}`} href="#booking">Discuss this package <Arrow/></a></Card>;
}

export function FAQItem({ item, open, onClick }: { item: typeof faqs[number]; open: boolean; onClick: () => void }) {
  return <div className={`faq-item ${open ? "open" : ""}`}><h3><button onClick={onClick} aria-expanded={open}><span>{item.q}</span><i aria-hidden="true"/></button></h3><div className="faq-answer" aria-hidden={!open}><p>{item.a}</p></div></div>;
}

export function StudioPage({ caseStudies }: { caseStudies: CaseStudySummary[] }) {
  const [faqOpen, setFaqOpen] = useState(0);
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("revealed"); observer.unobserve(entry.target); } }), { threshold: 0.08 });
    items.forEach(item => observer.observe(item)); return () => observer.disconnect();
  }, []);
  return <>
    <Navigation />
    <main id="top">
      <section className="hero"><div className="hero-grid"/><div className="container hero-layout"><div className="hero-copy" data-reveal><span className="eyebrow"><i/>Mentor-led software engineering</span><h1>We build MVPs, internal tools and AI features that <em>ship to production.</em></h1><p>Senior engineers lead the architecture and review every line. Our engineering pod builds it. You get production-grade software with a clean handover, on a fixed scope and timeline.</p><div className="hero-actions"><a className="button primary large" href="#booking"><CalendarIcon/>Book a 20-min scoping call</a><a className="text-link" href="/nst-studio-one-pager.pdf" download>Download the one-pager <Arrow/></a></div><div className="hero-proof"><span>FIXED SCOPE</span><span>MENTOR REVIEWED</span><span>YOU OWN THE CODE</span></div></div><div data-reveal><ArchitectureDiagram/></div></div></section>

      <section className="proof-strip" aria-labelledby="proof-label"><div className="container"><div className="proof-label" id="proof-label"><span>PROOF IN PRODUCTION</span><small>PLACEHOLDER METRICS · PENDING CLIENT CONFIRMATION</small></div><div className="metric-grid">{metrics.map(item => <MetricStat key={item.value} {...item}/>)}</div></div></section>

      <section className="section" id="services"><div className="container" data-reveal><SectionHeading eyebrow="01 · CAPABILITIES" title="What we build" text="Focused software for teams with a real operational problem and a deadline."/><div className="service-grid">{services.map((item, index) => <Card className="service-card" key={item.title}><div className="service-icon"><Icon name={item.icon}/></div><span className="card-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p></Card>)}</div></div></section>

      <section className="section alt" id="work"><div className="container" data-reveal><SectionHeading eyebrow="02 · SELECTED WORK" title="Work in production" text="Systems built for daily use, not demo day."/><div className="case-grid">{caseStudies.map(item => <CaseStudyCard item={item} key={item.name}/>)}</div><p className="confirmation-note"><span/>Client names, metrics and project details shown here are pending final publication approval.</p></div></section>

      <section className="section" id="how"><div className="container" data-reveal><SectionHeading eyebrow="03 · THE DELIVERY MODEL" title="Senior oversight. Focused execution."/><div className="model-grid"><div className="model-card"><span>01</span><div className="model-icon">M</div><h3>Mentors</h3><p>Tech leads and architects own architecture, review every PR and are accountable for quality.</p></div><div className="model-arrow"><Arrow/></div><div className="model-card"><span>02</span><div className="model-icon">E</div><h3>Engineering pod</h3><p>Builds features in daily sprints under mentor direction.</p></div><div className="model-arrow"><Arrow/></div><div className="model-card"><span>03</span><div className="model-icon">D</div><h3>Delivery coordination</h3><p>Timelines, weekly updates and one point of contact.</p></div></div><div className="model-statement"><span className="quote-mark">“</span><p>Our engineers are students at Newton School of Technology, working full-time on client projects under senior mentors. Mentors sign off the architecture before any code is written and review every change before it ships. You get the execution speed of a focused team with the oversight of senior engineers.</p></div><div className="process"><div className="process-line"/>{process.map((step, index) => <div className="process-step" key={step.title}><span>{index + 1}</span><h3>{step.title}</h3><p>{step.body}</p></div>)}</div></div></section>

      <section className="section alt" id="mentors"><div className="container" data-reveal><SectionHeading eyebrow="04 · TECHNICAL LEADERSHIP" title="The engineers accountable for your project" text="Every project has a named senior mentor. Profiles will be published after confirmation."/><div className="mentor-grid">{mentors.map((item, index) => <MentorCard item={item} index={index} key={index}/>)}</div></div></section>

      <section className="section" id="packages"><div className="container" data-reveal><SectionHeading eyebrow="05 · ENGAGEMENTS" title="Fixed scope. Clear outcomes." text="Start with a defined result, timeline and price."/><div className="package-grid">{packages.map(item => <PackageCard item={item} key={item.title}/>)}</div><div className="pricing-note"><p>Pricing is fixed against scope. If your budget is tighter, we reduce scope or phase delivery.</p><div className="addons"><span>ADD-ONS</span>{["UX/UI design", "Security and compliance", "Data and analytics", "Migration and modernization"].map(item => <i key={item}>{item}</i>)}</div></div></div></section>

      <section className="section stack-section"><div className="container" data-reveal><SectionHeading eyebrow="06 · TOOLKIT" title="Our default stack" text="We also work inside your existing one."/><div className="stack-grid">{Object.entries(stack).map(([group, items]) => <div className="stack-group" key={group}><h3>{group}</h3><div>{items.map(item => <span key={item}><i>{item.slice(0,2).toUpperCase()}</i>{item}</span>)}</div></div>)}</div></div></section>

      <section className="section alt" id="faq"><div className="container faq-layout" data-reveal><SectionHeading eyebrow="07 · FAQ" title="Questions we expect" text="Straight answers before you spend time on a call."/><div className="faq-list">{faqs.map((item, index) => <FAQItem key={item.q} item={item} open={faqOpen === index} onClick={() => setFaqOpen(faqOpen === index ? -1 : index)}/>)}</div></div></section>

      <section className="section booking" id="booking"><div className="container booking-panel" data-reveal><div className="booking-copy"><span className="eyebrow">08 · START HERE</span><h2>Tell us what you’re building.</h2><p>A 20-minute call to scope your project. You’ll leave with a clear recommendation, even if we’re not the right fit.</p><div className="call-points"><div><span>01</span><p>Describe the problem, users and deadline.</p></div><div><span>02</span><p>We identify the smallest useful scope.</p></div><div><span>03</span><p>You get a recommended next step.</p></div></div></div><div className="booking-widget" role="img" aria-label="Placeholder for Cal.com or Calendly booking widget"><div className="widget-top"><div className="widget-logo">N</div><div><strong>NST Studio</strong><span>20-minute scoping call</span></div></div><div className="widget-body"><span>OCTOBER 2026</span><div className="calendar-row">{["M","T","W","T","F"].map((d,i)=><b key={i}>{d}</b>)}</div><div className="calendar-row dates">{[5,6,7,8,9].map(d=><i key={d}>{d}</i>)}</div><div className="slot-placeholder"><span/><span/><span/></div><em>CAL.COM OR CALENDLY EMBED PLACEHOLDER</em></div></div></div></section>
    </main>
    <footer><div className="container footer-grid"><div><Logo/><p>Mentor-led software engineering for teams with a real problem and a deadline.</p></div><div><span>CONTACT</span><span className="placeholder-link">Email · PLACEHOLDER</span><span className="placeholder-link">LinkedIn · PLACEHOLDER</span></div><div><span>INITIATIVE</span><p>A Newton School of Technology initiative</p><small>© 2026 NST Studio</small></div></div></footer>
    <div className="mobile-book"><a className="button primary" href="#booking"><CalendarIcon/>Book a 20-min scoping call</a></div>
  </>;
}
