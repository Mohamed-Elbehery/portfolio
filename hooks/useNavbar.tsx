"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const useNavbar = (searchParams: { activeLink: string | undefined }) => {
  const [activeLink, setActiveLink] = useState<string | undefined>(
    searchParams?.activeLink || ""
  );
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const activeLinkValue = e?.currentTarget?.dataset?.link?.toLowerCase();

    setActiveLink(activeLinkValue);

    router.push(`/?activeLink=${activeLinkValue}`);
  };

  return { activeLink, setActiveLink, handleClick };
};

export default useNavbar;
