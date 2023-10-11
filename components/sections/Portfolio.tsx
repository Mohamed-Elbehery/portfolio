import { SearchParamsProps } from "@/types";

const Portfolio = ({ searchParams }: SearchParamsProps) => {
  return (
    <div
      className={`component${
        searchParams?.activeLink?.toLowerCase() === "portfolio"
          ? " active-component"
          : ""
      }`}
    >
      <h1>Portfolio Component</h1>
    </div>
  );
};

export default Portfolio;
