"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { SubHeaderMobile } from "../SubHeaderMobile/SubHeaderMobile";
import { SubHeaderDesktop } from "../SubHeaderDesktop/SubHeaderDesktop";
import { HeaderMobile } from "../HeaderMobile/HeaderMobile";
import HeaderDesktop from "../HeaderDesktop/HeaderDesktop";

export default function HeaderWrapper() {
  const isMobile = useIsMobile(960);

  if (isMobile === null) return null;

  return isMobile ? (
    <>
      <SubHeaderMobile />
      <HeaderMobile />
    </>
  ) : (
    <>
      <SubHeaderDesktop />
      <HeaderDesktop />
    </>
  );
}
