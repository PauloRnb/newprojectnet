"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, AlignJustify, CircleX } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";

import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useEffect, useState } from "react";

const Header = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [sheetOpenTwo, setSheetOpenTwo] = useState(false);
  const [sheetOpenThree, setSheetOpenThree] = useState(false);
  const [sheetOpenFour, setSheetOpenFour] = useState(false);
  const [sheetOpenFive, setSheetOpenFive] = useState(false);
  const [sheetOpenSix, setSheetOpenSix] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 960px)");

    const handleResize = () => {
      if (mediaQuery.matches) {
        setSheetOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <header className="z-10 flex min-w-[375px] flex-col items-center">
      <div className="flex w-full flex-col">
        <nav className="flex h-[3.75rem] w-dvw items-center justify-between bg-gray-100 px-5 dark:bg-gray-900 md:px-6">
          <Link href="/">
            <span className="sr-only">
              Link Para Redirecionar Para a Tela Inicial do Site
            </span>
            LOGO
          </Link>
          {/* Drawer Menu Lateral */}
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <button type="button" className="group">
                <div className="w-8 h-8 bg-blue-700 rounded-sm flex items-center justify-center group-hover:bg-transparent transition-colors duration-300 text-white group-hover:text-blue-700 border group-hover:border-blue-700 dark:bg-cyan-400 dark:group-hover:bg-transparent dark:group-hover:border-cyan-400 dark:group-hover:text-cyan-400">
                  <span className="sr-only">Ícone Menu</span>
                  <AlignJustify size={24} />
                </div>
              </button>
            </SheetTrigger>
            <SheetContent className="fixed z-50 gap-4 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm flex w-full flex-col overflow-y-auto bg-white p-0 dark:bg-gray-800 md:max-w-[613px] h-full md:gap-0">
              <SheetTitle className="text-lg font-semibold h-16 w-full bg-blue-700 dark:border-b dark:border-white dark:bg-gray-900">
                {/* Drawer Menu Lateral Residencial */}
                <Sheet open={sheetOpenTwo} onOpenChange={setSheetOpenTwo}>
                  <SheetTrigger asChild>
                    <button
                      type="button"
                      className="group mx-5 my-[1.375rem] md:mx-14"
                    >
                      <div className="flex flex-row items-center justify-center gap-2 hover:cursor-pointer group">
                        <h2 className="text-xl font-semibold leading-5 text-white opacity-100 transition-opacity group-hover:opacity-85 dark:text-white">
                          Residencial
                        </h2>
                        <span className="sr-only">
                          Ícone De Seta Apontando Para A Direita
                        </span>
                        <ChevronRight
                          size={20}
                          strokeWidth={2.7}
                          className="text-white opacity-100 transition-opacity group-hover:opacity-85 dark:text-white"
                        />
                      </div>
                    </button>
                  </SheetTrigger>
                  <SheetContent className="fixed z-50 gap-4 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 border-l border-b data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm flex w-full flex-col overflow-y-auto bg-white p-0 dark:bg-gray-800 md:max-w-[613px] h-[20.75rem]">
                    <SheetTitle className="text-lg font-semibold h-16 w-full bg-blue-700 dark:border-b dark:border-white dark:bg-gray-900">
                      <SheetClose className="absolute right-4 top-4 rounded-sm opacity-100 ring-offset-background transition-opacity hover:opacity-85 focus:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-1 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-white">
                        <CircleX size={28} />
                        <span className="sr-only">Fechar Menu</span>
                      </SheetClose>
                    </SheetTitle>
                    <main></main>
                  </SheetContent>
                </Sheet>
                <SheetClose className="absolute right-4 top-4 rounded-sm opacity-100 ring-offset-background transition-opacity hover:opacity-85 focus:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-1 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-white">
                  <CircleX size={28} />
                  <span className="sr-only">Fechar Menu</span>
                </SheetClose>
              </SheetTitle>
              <div className="p-5 flex flex-row items-center justify-start md:hidden">
                <Link
                  href="/indicate"
                  className="text-base font-normal text-gray-600 dark:text-white"
                >
                  Indique e Ganhe
                </Link>
              </div>
              <div className="flex items-center gap-10 w-full h-14 bg-gray-200 px-5 dark:bg-gray-900 md:px-14">
                {/* Drawer Menu Lateral Assine Agora */}
                <Sheet open={sheetOpenThree} onOpenChange={setSheetOpenThree}>
                  <SheetTrigger asChild>
                    <button
                      type="button"
                      className="flex items-center justify-center gap-2 hover:cursor-pointer"
                    >
                      <h2 className="text-lg font-semibold leading-5 text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500">
                        Assine Agora
                      </h2>
                      <span className="sr-only">
                        Ícone De Seta Apontando Para A Direita
                      </span>
                      <ChevronRight
                        size={20}
                        strokeWidth={2.7}
                        className="text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500"
                      />
                    </button>
                  </SheetTrigger>
                  <SheetContent className="fixed z-50 gap-4 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm flex w-full flex-col overflow-y-auto bg-white p-0 dark:bg-gray-800 md:max-w-[613px] h-full">
                    <SheetTitle className="text-lg font-semibold h-16 w-full bg-blue-700 dark:border-b dark:border-white dark:bg-gray-900">
                      <SheetClose className="absolute right-4 top-4 rounded-sm opacity-100 ring-offset-background transition-opacity hover:opacity-85 focus:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-1 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-white">
                        <CircleX size={28} />
                        <span className="sr-only">Fechar Menu</span>
                      </SheetClose>
                    </SheetTitle>
                    <main></main>
                  </SheetContent>
                </Sheet>
                {/* Drawer Menu Lateral Área do Cliente */}
                <Sheet open={sheetOpenFour} onOpenChange={setSheetOpenFour}>
                  <SheetTrigger asChild>
                    <button
                      type="button"
                      className="flex items-center justify-center gap-2 hover:cursor-pointer"
                    >
                      <h2 className="text-lg font-semibold leading-5 text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500">
                        Área do Cliente
                      </h2>
                      <span className="sr-only">
                        Ícone De Seta Apontando Para A Direita
                      </span>
                      <ChevronRight
                        size={20}
                        strokeWidth={2.7}
                        className="text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500"
                      />
                    </button>
                  </SheetTrigger>
                  <SheetContent className="fixed z-50 gap-4 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm flex w-full flex-col overflow-y-auto bg-white p-0 dark:bg-gray-800 md:max-w-[613px] h-full">
                    <SheetTitle className="text-lg font-semibold h-16 w-full bg-blue-700 dark:border-b dark:border-white dark:bg-gray-900">
                      <SheetClose className="absolute right-4 top-4 rounded-sm opacity-100 ring-offset-background transition-opacity hover:opacity-85 focus:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-1 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-white">
                        <CircleX size={28} />
                        <span className="sr-only">Fechar Menu</span>
                      </SheetClose>
                    </SheetTitle>
                    <main></main>
                  </SheetContent>
                </Sheet>
              </div>
              <main className="flex flex-1 flex-col px-5 md:px-14">
                {/* Drawer Menu Lateral Internet */}
                <Sheet open={sheetOpenFive} onOpenChange={setSheetOpenFive}>
                  <SheetTrigger asChild>
                    <button
                      type="button"
                      className="flex items-center justify-between gap-2 hover:cursor-pointer border-b border-gray-200 pt-10 pb-8 dark:border-white group"
                    >
                      <h2 className="text-base font-semibold leading-5 text-gray-600 dark:text-cyan-400 dark:group-hover:text-cyan-500 md:text-lg">
                        Internet Fibra
                      </h2>
                      <span className="sr-only">
                        Ícone De Seta Apontando Para A Direita
                      </span>
                      <ChevronRight
                        size={20}
                        strokeWidth={2.7}
                        className="text-gray-600 dark:text-cyan-400 dark:group-hover:text-cyan-500"
                      />
                    </button>
                  </SheetTrigger>
                  <SheetContent className="fixed z-50 gap-4 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm flex h-svh w-full flex-col overflow-y-auto bg-white p-0 dark:bg-gray-800 md:max-w-[613px]">
                    <SheetTitle className="text-lg font-semibold h-16 w-full bg-blue-700 dark:border-b dark:border-white dark:bg-gray-900">
                      <SheetClose className="absolute right-4 top-4 rounded-sm opacity-100 ring-offset-background transition-opacity hover:opacity-85 focus:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-1 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-white">
                        <CircleX size={28} />
                        <span className="sr-only">Fechar Menu</span>
                      </SheetClose>
                    </SheetTitle>
                    <main></main>
                  </SheetContent>
                </Sheet>
                <Link
                  href="/combos"
                  className="flex items-center justify-between gap-2 hover:cursor-pointer border-b border-gray-200 pt-10 pb-8 dark:border-white group"
                >
                  <h2 className="text-base font-semibold leading-5 text-gray-600 dark:text-cyan-400 dark:group-hover:text-cyan-500 md:text-lg">
                    Nossos Combos
                  </h2>
                </Link>
                {/* Drawer Menu Lateral Streaming */}
                <Sheet open={sheetOpenSix} onOpenChange={setSheetOpenSix}>
                  <SheetTrigger asChild>
                    <button
                      type="button"
                      className="flex items-center justify-between gap-2 hover:cursor-pointer border-b border-gray-200 pt-10 pb-8 dark:border-white group"
                    >
                      <h2 className="text-base font-semibold leading-5 text-gray-600 dark:text-cyan-400 dark:group-hover:text-cyan-500 md:text-lg">
                        Straming
                      </h2>
                      <span className="sr-only">
                        Ícone De Seta Apontando Para A Direita
                      </span>
                      <ChevronRight
                        size={20}
                        strokeWidth={2.7}
                        className="text-gray-600 dark:text-cyan-400 dark:group-hover:text-cyan-500"
                      />
                    </button>
                  </SheetTrigger>
                  <SheetContent className="fixed z-50 gap-4 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm flex h-svh w-full flex-col overflow-y-auto bg-white p-0 dark:bg-gray-800 md:max-w-[613px]">
                    <SheetTitle className="text-lg font-semibold h-16 w-full bg-blue-700 dark:border-b dark:border-white dark:bg-gray-900">
                      <SheetClose className="absolute right-4 top-4 rounded-sm opacity-100 ring-offset-background transition-opacity hover:opacity-85 focus:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-1 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-white">
                        <CircleX size={28} />
                        <span className="sr-only">Fechar Menu</span>
                      </SheetClose>
                    </SheetTitle>
                    <main></main>
                  </SheetContent>
                </Sheet>
                <Link
                  href="/security"
                  className="flex items-center justify-between gap-2 hover:cursor-pointer border-b border-gray-200 pt-10 pb-8 dark:border-white group"
                >
                  <h2 className="text-base font-semibold leading-5 text-gray-600 dark:text-cyan-400 dark:group-hover:text-cyan-500 md:text-lg">
                    Segurança
                  </h2>
                </Link>
              </main>
            </SheetContent>
          </Sheet>
        </nav>
        <div className="z-0 hidden h-1 w-full 32md:block"></div>
      </div>
    </header>
  );
};

export default Header;
