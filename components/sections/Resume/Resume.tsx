import { SearchParamsProps, SkillType } from "@/types";
import SectionTitle from "../../SectionTitle";
import { FaCss3Alt, FaGitAlt, FaGithub, FaGraduationCap, FaGulp, FaHtml5, FaNodeJs, FaPython, FaReact, FaSass } from "react-icons/fa";
import { SiAdobexd, SiAntdesign, SiBun, SiChakraui, SiClickup, SiDjango, SiExpress, SiFastify, SiFilezilla, SiFirebase, SiFramer, SiGreensock, SiHeadlessui, SiHono, SiJira, SiJquery, SiMantine, SiMobx, SiMongodb, SiMui, SiMysql, SiNestjs, SiNextdotjs, SiPug, SiQwik, SiReactivex, SiReactquery, SiRecoil, SiRedux, SiShadcnui, SiStyledcomponents, SiSwr, SiTailwindcss, SiThreedotjs, SiTypescript } from "react-icons/si";
import ResumeCategory from "./ResumeCategory";
import ResumeExp from "./ResumeExp";
import { IoLogoJavascript } from "react-icons/io";
import { BsBootstrapFill } from "react-icons/bs";
import { TbBrandFramerMotion, TbBrandReactNative } from "react-icons/tb";
import { IoLogoFigma } from "react-icons/io5";
import { IconType } from "react-icons";
import { BiLogoPostgresql } from "react-icons/bi";
import Image from "next/image";
import { skills } from "@/constants";

const Resume = ({ searchParams }: SearchParamsProps) => {
  const educationDesc = () => <>Student at Computer Science and Information Department in Arab Open University in Egypt,<br />Bachelor of Computer Science</>

  return (
    <article
      className={`component${searchParams?.activeLink?.toLowerCase() === "resume"
        ? " active-component"
        : ""
        }`}
    >
      <SectionTitle title="Resume" />

      <div className="space-y-4">
        {/* Education */}
        <ResumeCategory Icon={FaGraduationCap} title="Education">
          <ResumeExp title="Arab Open University" date="Septempber 2021 - June 2025" description={educationDesc()} />
        </ResumeCategory>

        {/* Experience */}
        <ResumeCategory showLineProgress={true} Icon={SiReactivex} title="Experience">
          <ResumeExp title="Frontend Developer" date="March 2024 - June 2024" description={"Mark & Success (Full-time)"} />
          <ResumeExp title="Frontend Developer" date="September 2023 - March 2024" description={"Rasid (Full-time)"} />
          <ResumeExp title="Full-Stack Developer" date="January 2023 - October 2023" description={"AMIT-Learning (Internship)"} />
          <ResumeExp title="Frontend Developer" date="July 2023 - Aug 2023" description={"Information Technology Institute (ITI) - Internship"} />
          <ResumeExp title="Frontend Developer and Instructor" date="September 2023 - November 2023" description={"GDSC Core Technical (Part-time)"} />
        </ResumeCategory>
      </div>

      <div className="mt-12 space-y-12">
        <h2 className="text-center text-2xl font-bold">My Skills</h2>

        <div className="text-gold grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 place-items-center gap-y-8">
          {skills.map((skill) => (
            <Skill key={skill.skill} {...skill} />
          ))}
        </div>
      </div>
    </article>
  );
};

const Skill: React.FC<SkillType> = ({ Icon, src, skill }) => {
  return (
    <div className="flex flex-col items-center gap-y-2">
      {src ? <Image className="w-[40px] h-[40px]" alt="Zustand SVG Icon" src={src} width={40} height={40} /> : (Icon && <Icon size={40} />)}
      <h4 className="text-grey">{skill}</h4>
    </div>
  )
}

export default Resume;
