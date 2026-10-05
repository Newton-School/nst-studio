export type CaseStudySummary = {
  slug: string;
  name: string;
  industry: string;
  problem: string;
  build: string;
  tags: string[];
  result: string;
  screen: string;
  order: number;
};

export type CaseStudy = CaseStudySummary & {
  content: string;
};
