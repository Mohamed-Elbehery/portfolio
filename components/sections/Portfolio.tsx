import { SearchParamsProps } from "@/types";
import SectionTitle from "../SectionTitle";

const Portfolio = ({ searchParams }: SearchParamsProps) => {
  return (
    <article
      className={`component${
        searchParams?.activeLink?.toLowerCase() === "portfolio"
          ? " active-component"
          : ""
      }`}
    >
      <SectionTitle title="Portfolio" />
    </article>
  );
};

export default Portfolio;
