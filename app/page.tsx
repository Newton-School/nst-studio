import { StudioPage } from "@/components/studio-page";
import { getAllCaseStudies } from "@/lib/case-studies";

export default function Home() {
  return <StudioPage caseStudies={getAllCaseStudies()} />;
}
