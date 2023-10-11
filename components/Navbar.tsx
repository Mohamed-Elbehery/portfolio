"use client";

import { SearchParamsProps } from "@/types";
import useNavbar from "@/hooks/useNavbar";

const Navbar = ({ searchParams }: SearchParamsProps) => {
  const { activeLink, handleClick } = useNavbar();

  const { activeLink: query } = searchParams;

  return (
    <nav className="absolute right-0 top-0 bg-[#282828] rounded-tr-xl rounded-bl-xl z-50 text-wheat">
      <ul className="flex items-center gap-10 p-4 px-14">
        <li
          onClick={handleClick}
          data-link="about"
          className={`${
            (activeLink === "about" ||
              activeLink === "" ||
              query === "about") &&
            "nav-active-link"
          } nav-link`}
        >
          about
        </li>
        <li
          onClick={handleClick}
          data-link="resume"
          className={`${
            (activeLink === "resume" || query === "resume") && "nav-active-link"
          } nav-link`}
        >
          resume
        </li>
        <li
          onClick={handleClick}
          data-link="portfolio"
          className={`${
            (activeLink === "portfolio" || query === "portfolio") &&
            "nav-active-link"
          } nav-link`}
        >
          portfolio
        </li>
        <li
          onClick={handleClick}
          data-link="contact"
          className={`${
            (activeLink === "contact" || query === "contact") &&
            "nav-active-link"
          } nav-link`}
        >
          contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
