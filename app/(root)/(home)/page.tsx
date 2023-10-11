import { About, Contact, HOC, Portfolio, Resume, Sidebar } from "@/components";
import { SearchParamsProps } from "@/types";

const page = ({ searchParams }: SearchParamsProps) => {
  return (
    <main>
      <Sidebar />
      <HOC searchParams={searchParams}>
        <About searchParams={searchParams} />
        <Resume searchParams={searchParams} />
        <Portfolio searchParams={searchParams} />
        <Contact searchParams={searchParams} />
      </HOC>
    </main>
  );
};

export default page;
