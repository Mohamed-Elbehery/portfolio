import React from "react";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode | JSX.Element;
  searchParams: { activeLink: string | undefined };
};

const HOC = ({ children, searchParams }: Props) => {
  return (
    <section className="relative flex-[6]">
      <Navbar searchParams={searchParams} />
      {children}
    </section>
  );
};

export default HOC;
