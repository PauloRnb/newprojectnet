"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { HeaderMobile } from "../HeaderMobile/HeaderMobile";
import HeaderDesktop from "../HeaderDesktop/HeaderDesktop";

export default function HeaderWrapper() {
  const isMobile = useIsMobile(960);

  if (isMobile === null) return null;

  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
}
