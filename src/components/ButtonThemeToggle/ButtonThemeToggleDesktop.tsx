"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";

interface ButtonThemeToggleProps {
  className?: string;
}

export function ButtonThemeToggleDesktop({
  className = "",
}: ButtonThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`flex items-center gap-2 font-semibold rounded-md focus:outline-none transition-colors ${className}`}
    >
      {isDark ? <BsSunFill size={14} /> : <BsFillMoonStarsFill size={14} />}
      {isDark ? "Modo Claro" : "Modo Escuro"}
    </button>
  );
}
