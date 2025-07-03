"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ButtonThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-4 py-2 text-white bg-blue-700 dark:bg-cyan-400 dark:hover:bg-cyan-500 hover:bg-blue-500 rounded-md w-full focus:outline-none focus-visible:bg-blue-500 dark:focus-visible:bg-cyan-500"
    >
      {theme === "dark" ? "Modo Claro" : "Modo Escuro"}
    </button>
  );
}
