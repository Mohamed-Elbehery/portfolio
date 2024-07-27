import { SiTypescript, SiJquery, SiTailwindcss, SiNextdotjs, SiRedux, SiRecoil, SiMobx, SiReactquery, SiSwr, SiStyledcomponents, SiAntdesign, SiChakraui, SiMantine, SiShadcnui, SiHeadlessui, SiFramer, SiGreensock, SiThreedotjs, SiMui, SiNestjs, SiBun, SiExpress, SiHono, SiFastify, SiMongodb, SiPug, SiDjango, SiPostgresql, SiMysql, SiJira, SiClickup, SiFirebase, SiFilezilla, SiRedis } from "react-icons/si";
import { FaGithub, FaLinkedin, FaPhoneAlt, FaWhatsapp, FaCode, FaGraduationCap, FaLightbulb, FaMedal, FaHtml5, FaCss3Alt, FaSass, FaReact, FaNodeJs, FaGulp, FaPython, FaGitAlt } from "react-icons/fa";
import { FaLocationDot, FaWandMagicSparkles } from "react-icons/fa6";
import { TbBrandFramerMotion, TbBrandReactNative } from "react-icons/tb";
import { IoMdMail, IoLogoJavascript } from "react-icons/io";
import { MdOnDeviceTraining } from "react-icons/md";
import { IoLogoFigma } from "react-icons/io5";
import { GiSmart } from "react-icons/gi";

import { type SkillType } from "@/types";

export const contactInformation = [
  {
    title: "Email",
    value: "dev.elbehery@gmail.com",
    icon: IoMdMail,
    alias: "elsharqawi.dev",
  },
  {
    title: "Phone",
    value: "+201021141193",
    icon: FaPhoneAlt,
  },
  {
    title: "Location",
    value: "Cairo, Egypt",
    icon: FaLocationDot,
  },
];

export const socialIcons = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/mohamed-elsharqawi/",
    title: "Linkedin Link"
  },
  {
    icon: FaGithub,
    href: "https://github.com/Mohamed-Elbehery",
    title:"Github Link"
  },
  {
    icon: FaWhatsapp,
    href: "https://api.whatsapp.com/send/?phone=201021141193",
    title: "Whatsapp Link"
  },
];

export const experiences = [
  {
    icon: FaMedal,
    num: "2",
    title: "Years of Experience",
  },
  {
    icon: FaLightbulb,
    num: "30",
    title: "Projects Completed",
  },
  {
    icon: FaGraduationCap,
    num: "20",
    title: "Courses & Tutorials",
  },
  {
    icon: MdOnDeviceTraining,
    num: "5",
    title: "Trainings & Internships",
  },
];

export const services = [
  {
    icon: FaCode,
    title: "Web Development",
    description:
      "Crafting cutting-edge websites with the latest technologies. Experience high-quality, professional development tailored to your needs.",
  },
  {
    icon: FaWandMagicSparkles,
    title: "Enhancing Code",
    description:
      "Optimize your code for peak performance and efficiency. Achieve faster load times and smoother operations with our expert enhancements.",
  },
  {
    icon: GiSmart,
    title: "Creativity",
    description:
      "Make innovative designs using GSAP and Three.js for interactive and visually stunning websites. Unleash your creativity with my expert design services.",
  },
];

//* Resume
export const skills: SkillType[] = [
  { Icon: FaHtml5, skill: "HTML" },
  { Icon: FaCss3Alt, skill: "CSS" },
  { Icon: IoLogoJavascript, skill: "JavaScript" },
  { Icon: SiTypescript, skill: "TypeScript" },
  { Icon: FaSass, skill: "Sass" },
  { Icon: SiJquery, skill: "Jquery" },
  { Icon: SiTailwindcss, skill: "Tailwind CSS" },
  { Icon: FaReact, skill: "React" },
  { Icon: SiNextdotjs, skill: "Next.js" },
  { Icon: SiRedux, skill: "Redux" },
  { skill: "Zustand", src: "/icons/zustand.svg" },
  { Icon: SiRecoil, skill: "Recoil" },
  { Icon: SiMobx, skill: "Mobx" },
  { Icon: SiReactquery, skill: "React Query" },
  { Icon: SiSwr, skill: "SWR" },
  { Icon: SiStyledcomponents, skill: "Styled Comp" },
  { Icon: SiAntdesign, skill: "Ant Design" },
  { Icon: SiChakraui, skill: "Chakra UI" },
  { Icon: SiMantine, skill: "Mantine" },
  { Icon: SiShadcnui, skill: "Shadcn-ui" },
  { Icon: SiHeadlessui, skill: "Headless UI" },
  { Icon: TbBrandFramerMotion, skill: "Framer Motion" },
  { Icon: SiFramer, skill: "Framer" },
  { Icon: SiGreensock, skill: "GSAP" },
  { Icon: SiThreedotjs, skill: "Three.js" },
  { Icon: SiMui, skill: "MUI" },
  { Icon: TbBrandReactNative, skill: "React Native" },
  { Icon: FaNodeJs, skill: "Node.js" },
  { Icon: SiNestjs, skill: "Nest.js" },
  { Icon: SiBun, skill: "Bun" },
  { Icon: SiExpress, skill: "Express.js" },
  { Icon: SiHono, skill: "Hono" },
  { Icon: SiFastify, skill: "Fastify" },
  { Icon: SiMongodb, skill: "MongoDB" },
  { Icon: SiRedis, skill: "Redis DB" },
  { Icon: FaGulp, skill: "Gulp.js" },
  { Icon: SiPug, skill: "Pug.js" },
  { Icon: FaPython, skill: "Python" },
  { Icon: SiDjango, skill: "Django" },
  { Icon: SiPostgresql, skill: "Postgresql" },
  { Icon: SiMysql, skill: "MySQL" },
  { Icon: SiJira, skill: "Jira" },
  { Icon: SiClickup, skill: "Clickup" },
  { Icon: FaGitAlt, skill: "Git" },
  { Icon: FaGithub, skill: "Github" },
  { Icon: SiFirebase, skill: "Firebase" },
  { Icon: IoLogoFigma, skill: "Figma" },
  { Icon: SiFilezilla, skill: "Filezilla" },
];