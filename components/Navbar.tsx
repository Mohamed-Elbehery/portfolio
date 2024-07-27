"use client";

import { SearchParamsProps } from "@/types";
import useNavbar from "@/hooks/useNavbar";

const Navbar = ({ searchParams }: SearchParamsProps) => {
  const navLinks = ["about", "resume", "portfolio", "contact"];
  const { activeLink: query } = searchParams;
  const { activeLink, setActiveLink, handleClick } = useNavbar(searchParams);

  return (
    <nav>
      <ul className="flex items-center gap-10 p-4 px-14">
        {navLinks.map((link) => (
          <li
            key={link}
            onClick={handleClick}
            data-link={link}
            className={`nav-link${
              activeLink === link || query === link
                ? " nav-active-link"
                : activeLink == ""
                ? setActiveLink("about")
                : ""
            }`}
          >
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
