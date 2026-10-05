import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { CaseStudy, CaseStudySummary } from "@/content/case-study-types";

const caseStudyDirectory = path.join(process.cwd(), "content", "case-studies");

function markdownFiles() {
  return fs
    .readdirSync(caseStudyDirectory)
    .filter((file) => file.endsWith(".md") && !file.startsWith("_") && file !== "README.md");
}

function readCaseStudy(file: string): CaseStudy {
  const slug = file.replace(/\.md$/, "");
  const source = fs.readFileSync(path.join(caseStudyDirectory, file), "utf8");
  const { data, content } = matter(source);

  const required = ["name", "industry", "problem", "build", "result", "screen"] as const;
  for (const field of required) {
    if (typeof data[field] !== "string" || !data[field].trim()) {
      throw new Error(`Case study ${file} is missing required front matter field: ${field}`);
    }
  }

  if (!Array.isArray(data.tags) || data.tags.some((tag) => typeof tag !== "string")) {
    throw new Error(`Case study ${file} must define tags as a string array`);
  }

  return {
    slug,
    name: data.name,
    industry: data.industry,
    problem: data.problem,
    build: data.build,
    tags: data.tags,
    result: data.result,
    screen: data.screen,
    order: typeof data.order === "number" ? data.order : 999,
    content,
  };
}

export function getAllCaseStudies(): CaseStudySummary[] {
  return markdownFiles()
    .map(readCaseStudy)
    .sort((a, b) => a.order - b.order)
    .map(({ content: _content, ...summary }) => summary);
}

export function getCaseStudy(slug: string): CaseStudy | null {
  const file = markdownFiles().find((item) => item.replace(/\.md$/, "") === slug);
  return file ? readCaseStudy(file) : null;
}

export function getCaseStudySlugs() {
  return markdownFiles().map((file) => file.replace(/\.md$/, ""));
}
