import { SearchParamsProps } from "@/types";
import SectionTitle from "../SectionTitle";

const Portfolio = ({ searchParams }: SearchParamsProps) => {
  return (
    <article
      className={`component${
        searchParams?.activeLink?.toLowerCase() === "portfolio"
          ? " active-component"
          : " !h-0 !overflow-hidden"
      }`}
    >
      <SectionTitle title="Portfolio" />
    </article>
  );
};

export default Portfolio;
