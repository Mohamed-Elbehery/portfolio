import { SearchParamsProps } from "@/types";

const Resume = ({ searchParams }: SearchParamsProps) => {
  return (
    <div
      className={`component${
        searchParams?.activeLink?.toLowerCase() === "resume"
          ? " active-component"
          : ""
      }`}
    >
      <h1>Resume Component</h1>
    </div>
  );
};

export default Resume;
