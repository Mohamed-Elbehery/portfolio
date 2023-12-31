import { SearchParamsProps } from "@/types";

const About = ({ searchParams }: SearchParamsProps) => {
  return (
    <div
      className={`component${
        searchParams?.activeLink?.toLowerCase() === "about" ||
        searchParams?.activeLink === undefined
          ? " active-component"
          : ""
      }`}
    >
      <h1>About Component</h1>
    </div>
  );
};

export default About;
