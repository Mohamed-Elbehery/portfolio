"use client";

import Link from "next/link";
import Image from "next/image";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ContactInformation from "./ContactInformation";
import { personalPhoto } from "@/assets";
import { socialIcons } from "@/constants";
import { useState } from "react";

const Sidebar = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <aside className={`${!isClicked && "max-[1250px]:h-[157px]"}`}>
      <button
        id="show-contacts"
        onClick={() => setIsClicked(!isClicked)}
        className="text-gold text-sm absolute flex items-center gap-1 right-0 top-0 bg-[#2B2B2B] py-2 px-4 rounded-tr-3xl rounded-bl-3xl gold-gradient min-[1251px]:hidden"
      >
        <span>Show Contacts</span>{" "}
        {!isClicked ? (
          <ExpandMoreIcon className="text-base" />
        ) : (
          <ExpandLessIcon className="text-base" />
        )}
      </button>
      <div className="main-info">
        {/* Personal Photo */}
        <Image
          src={personalPhoto}
          width={125}
          height={125}
          alt="personal-photo"
          className={`rounded-full mx-auto`}
        />

        <div className="main-text-info">
          {/* Name */}
          <h1 className="my-3 font-bold text-2xl text-wheat text-center">
            Mohamed Ahmed
          </h1>

          {/* Job Title */}
          <h3 className="text-wheat !text-center text-sm bg-[#333333] max-w-[150px] mx-auto py-1 rounded-md">
            Front-End Developer
          </h3>
        </div>
      </div>

      {/* Divider */}
      <hr className="max-w-[160px] mx-auto h-[1px] border-[#333] my-5"></hr>

      {/* Contact Information */}
      <ContactInformation />

      {/* Social Icons */}
      <div className="social-icons">
        {socialIcons.map(({ icon: Icon, href }, index) => (
          <Link
            href={href}
            target="_blank"
            key={index}
            className="group bg-gradient-to-b from-zinc-800 via-zinc-800 to-gray-700 rounded-full p-[6px]"
          >
            <Icon className="group-hover:text-gold transition" />
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
