import { Children, isValidElement, type ReactElement } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { MermaidDiagram } from "@/components/mermaid-diagram";

const components: Components = {
  pre({ children }) {
    const child = Children.only(children);
    if (isValidElement(child)) {
      const props = (child as ReactElement<{ className?: string; children?: unknown }>).props;
      if (props.className?.includes("language-mermaid")) {
        return <MermaidDiagram chart={String(props.children ?? "").replace(/\n$/, "")} />;
      }
    }
    return <pre>{children}</pre>;
  },
  a({ href = "", children, ...props }) {
    const external = href.startsWith("http://") || href.startsWith("https://");
    return <a href={href} {...props} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>{children}</a>;
  },
  img({ alt = "", ...props }) {
    return <img alt={alt} loading="lazy" {...props} />;
  },
};

export function MarkdownContent({ content }: { content: string }) {
  return <div className="markdown-body"><ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeHighlight]} components={components}>{content}</ReactMarkdown></div>;
}
