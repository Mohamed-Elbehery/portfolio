import { SearchParamsProps } from "@/types";

const Portfolio = ({ searchParams }: SearchParamsProps) => {
  return (
    <div
      className={`${
        searchParams?.activeLink?.toLowerCase() === "portfolio" &&
        "active-component"
      } component`}
    >
      <h1>Portfolio Component</h1>
    </div>
  );
};

export default Portfolio;
