import { SearchParamsProps } from "@/types";
import SectionTitle from "../SectionTitle";
import cn from "@/utils/cn";

const Portfolio = ({ searchParams }: SearchParamsProps) => {
  const isActive = searchParams?.activeLink?.toLowerCase() === "portfolio";

  return (
    <article
      className={cn("component", isActive ? "active-component" : "h-0 overflow-hidden")}
    >
      <SectionTitle title="Portfolio" />
    </article>
  );
};

export default Portfolio;
