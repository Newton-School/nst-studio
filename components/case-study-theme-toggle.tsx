"use client";

import { useEffect, useState } from "react";

export function CaseStudyThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("nst-theme") as "light" | "dark" | null;
    const next = saved || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(next);
    document.documentElement.dataset.theme = next;
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("nst-theme", next);
  };

  return <button className="theme-toggle" onClick={toggle} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
    <svg aria-hidden="true" viewBox="0 0 20 20"><path d={theme === "light" ? "M10 2v2M10 16v2M2 10h2M16 10h2M4.3 4.3l1.4 1.4M14.3 14.3l1.4 1.4M15.7 4.3l-1.4 1.4M5.7 14.3l-1.4 1.4M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" : "M17 12.5A7 7 0 0 1 7.5 3 7 7 0 1 0 17 12.5Z"}/></svg>
  </button>;
}
