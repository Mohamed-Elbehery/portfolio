import { SearchParamsProps } from "@/types";
import SectionTitle from "../SectionTitle";
import cn from "@/utils/cn";

const Contact = ({ searchParams }: SearchParamsProps) => {
  const isActive = searchParams?.activeLink?.toLowerCase() === "contact";

  return (
    <article
      className={cn("component", isActive ? "active-component" : "h-0 overflow-hidden")}
    >
      <SectionTitle title="Contact" />
    </article>
  );
};

export default Contact;
