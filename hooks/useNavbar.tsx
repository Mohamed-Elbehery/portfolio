"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const useNavbar = () => {
  const [activeLink, setActiveLink] = useState<string | undefined>("");
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const activeLinkValue = e?.currentTarget?.dataset?.link?.toLowerCase();

    setActiveLink(activeLinkValue);

    router.push(`/?activeLink=${activeLinkValue}`);
  };

  return { activeLink, handleClick };
};

export default useNavbar;
