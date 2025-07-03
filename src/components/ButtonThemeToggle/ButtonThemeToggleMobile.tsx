"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ButtonThemeToggleProps {
  className?: string;
}

export function ButtonThemeToggleMobile({
  className = "",
}: ButtonThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`font-semibold rounded-md focus:outline-none transition-colors ${className}`}
    >
      {theme === "dark" ? "Modo Claro" : "Modo Escuro"}
    </button>
  );
}
