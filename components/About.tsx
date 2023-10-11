import { SearchParamsProps } from "@/types";

const About = ({ searchParams }: SearchParamsProps) => {
  return (
    <div
      className={`${
        searchParams?.activeLink?.toLowerCase() === "about" &&
        "active-component"
      } component`}
    >
      <h1>About Component</h1>
    </div>
  );
};

export default About;
