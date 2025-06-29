"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

interface ThemeToggleButtonProps {
  className?: string; // prop para passar classes customizadas
}

export function ThemeToggleButton({ className = "" }: ThemeToggleButtonProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      onClick={toggleTheme}
      className={`flex items-center gap-2 bg-blue-700 text-base font-medium md:text-lg text-white dark:bg-cyan-500 hover:bg-blue-800 hover:text-white dark:hover:bg-cyan-600 ${className}`}
    >
      {isDark ? (
        <>
          <span className="sr-only">Ícone Modo Escuro</span>
          <Sun size={18} strokeWidth={2.7} />
          Modo Claro
        </>
      ) : (
        <>
          <span className="sr-only">Ícone Modo Claro</span>
          <Moon size={18} strokeWidth={2.7} />
          Modo Escuro
        </>
      )}
    </Button>
  );
}
