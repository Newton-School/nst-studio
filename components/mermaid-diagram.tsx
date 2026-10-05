"use client";

import { useEffect, useId, useState } from "react";

export function MermaidDiagram({ chart }: { chart: string }) {
  const reactId = useId();
  const [svg, setSvg] = useState("");
  const [error, setError] = useState("");
  const [theme, setTheme] = useState<"default" | "dark">("default");

  useEffect(() => {
    const root = document.documentElement;
    const updateTheme = () => setTheme(root.dataset.theme === "dark" ? "dark" : "default");
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let active = true;
    const render = async () => {
      try {
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({
          startOnLoad: false,
          theme,
          securityLevel: "strict",
          fontFamily: '"Mona Sans", Inter, sans-serif',
        });
        const id = `mermaid-${reactId.replace(/[^a-zA-Z0-9]/g, "")}-${theme}`;
        const result = await mermaid.render(id, chart);
        if (active) {
          setSvg(result.svg);
          setError("");
        }
      } catch (reason) {
        if (active) {
          setSvg("");
          setError(reason instanceof Error ? reason.message : "The diagram could not be rendered.");
        }
      }
    };
    render();
    return () => { active = false; };
  }, [chart, reactId, theme]);

  if (error) {
    return <div className="mermaid-error" role="alert"><strong>Diagram error</strong><span>{error}</span></div>;
  }

  return <div className="mermaid-diagram" aria-label="System diagram" dangerouslySetInnerHTML={{ __html: svg }} />;
}
