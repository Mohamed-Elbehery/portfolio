import { SearchParamsProps } from "@/types";

const Contact = ({ searchParams }: SearchParamsProps) => {
  return (
    <div
      className={`${
        searchParams?.activeLink?.toLowerCase() === "contact" &&
        "active-component"
      } component`}
    >
      <h1>Contact Component</h1>
    </div>
  );
};

export default Contact;
