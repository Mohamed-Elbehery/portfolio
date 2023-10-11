import { SearchParamsProps } from "@/types";

const Resume = ({ searchParams }: SearchParamsProps) => {
  return (
    <div
      className={`${
        searchParams?.activeLink?.toLowerCase() === "resume" &&
        "active-component"
      } component`}
    >
      <h1>Resume Component</h1>
    </div>
  );
};

export default Resume;
