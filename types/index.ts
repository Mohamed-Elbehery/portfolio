import { IconType } from "react-icons";

export type InfoProps = {
  title: string;
  alias: string | undefined;
  value: string;
};

export type SearchParamsProps = {
  searchParams: { activeLink: undefined | string };
}

//* Resume
export type SkillType = {
  Icon?: IconType;
  skill: string;
  src?: string;
};