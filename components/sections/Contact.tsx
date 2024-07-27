import { SearchParamsProps } from "@/types";
import SectionTitle from "../SectionTitle";

const Contact = ({ searchParams }: SearchParamsProps) => {
  return (
    <article
      className={`component${
        searchParams?.activeLink?.toLowerCase() === "contact"
          ? " active-component"
          : ""
      }`}
    >
      <SectionTitle title="Contact" />
    </article>
  );
};

export default Contact;
