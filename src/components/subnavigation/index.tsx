"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { CirclePlus, ChevronRight, CircleX } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import { ThemeToggleButton } from "../buttontoggletheme/buttontoggletheme";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useEffect, useState } from "react";

const SubNavigation = () => {
  const handleClick = () => {
    const phone = "5585997362750";
    const message = encodeURIComponent(
      "Olá, quero saber mais sobre os planos de internet fibra óptica!"
    );
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 960px)");

    const handleResize = () => {
      if (mediaQuery.matches) {
        setSheetOpen(false); // Fecha automaticamente se for ≥ 960px
      }
    };

    // Adiciona o listener
    mediaQuery.addEventListener("change", handleResize);

    // Remove ao desmontar
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-20 w-screen min-w-[375px] bg-blue-700 dark:bg-gray-800 32md:hidden">
      <div className="flex flex-col items-end justify-end px-6 md:hidden">
        <button
          onClick={handleClick}
          className="flex items-center justify-center border-none text-white py-3 my-[10px] h-0 gap-1 rounded-none bg-transparent px-0 text-xs font-medium leading-[14.4px] opacity-100 transition-opacity hover:opacity-85 hover:bg-transparent dark:bg-transparent dark:text-cyan-400 dark:hover:bg-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:p-4"
        >
          Assine Via WhatsApp
          <FaWhatsapp size={14} className="md:w-4 md:h-4" />
        </button>
        <Separator className="dark:bg-white h-[1px] w-full bg-blue-900 rounded-full" />
      </div>
      <div className="flex flex-row items-center justify-between px-5 py-4 md:px-6">
        {/* Dialog Áreas de Cobertura */}
        <Dialog>
          <DialogTrigger asChild>
            <button
              type="button"
              className="flex cursor-pointer items-center gap-1 text-xs font-medium text-white opacity-100 transition-opacity duration-300 hover:opacity-85 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-1 dark:text-cyan-400 focus-visible:p-2"
            >
              <h2 className="text-xs md:text-base">Áreas de Cobertura</h2>
              <CirclePlus size={14} className="md:w-4 md:h-4" />
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-lg border border-gray-400 sm:rounded-lg w-[20.9375rem] h-[15.6875rem] bg-white dark:bg-gray-900 dark:border-gray-500 md:w-[34.875rem] md:h-[21.125rem] py-6 px-4 md:px-6 select-none">
            <DialogHeader>
              <DialogTitle className="text-left text-blue-700 text-lg font-semibold leading-5 dark:text-white md:text-2xl md:leading-7">
                Áreas de Cobertura:
              </DialogTitle>
            </DialogHeader>
            <ul className="grid grid-cols-2 items-center gap-x-3 gap-y-1 list-disc list-outside">
              <li className="ml-5 text-blue-700 dark:text-white">
                <p className="text-gray-600 text-sm font-medium leading-4 md:text-base md:leading-5 dark:text-gray-300">
                  Cigana
                </p>
              </li>
              <li className="ml-5 text-blue-700 dark:text-white">
                <p className="text-gray-600 text-sm font-medium leading-4 md:text-base md:leading-5 dark:text-gray-300">
                  Vila Cazé
                </p>
              </li>
              <li className="ml-5 text-blue-700 dark:text-white">
                <p className="text-gray-600 text-sm font-medium leading-4 md:text-base md:leading-5 dark:text-gray-300">
                  Nova Cigana
                </p>
              </li>
              <li className="ml-5 text-blue-700 dark:text-white">
                <p className="text-gray-600 text-sm font-medium leading-4 md:text-base md:leading-5 dark:text-gray-300">
                  Paumirim
                </p>
              </li>
              <li className="ml-5 text-blue-700 dark:text-white">
                <p className="text-gray-600 text-sm font-medium leading-4 md:text-base md:leading-5 dark:text-gray-300">
                  Planalto Caucaia
                </p>
              </li>
              <li className="ml-5 text-blue-700 dark:text-white">
                <p className="text-gray-600 text-sm font-medium leading-4 md:text-base md:leading-5 dark:text-gray-300">
                  Padre J. Maria I e II
                </p>
              </li>
            </ul>
            <DialogFooter className="flex-col items-start justify-end">
              <DialogDescription className="text-gray-600 text-xs font-medium text-left leading-4 tracking-[0.01rem] dark:text-gray-300 md:text-sm md:leading-4">
                <span className="text-blue-700 text-sm font-semibold leading-4 dark:text-orange-500 md:text-base md:leading-5">
                  *
                </span>
                Consultar viabilidade para sua região.
              </DialogDescription>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        {/* Drawer Menu Lateral */}
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              className="flex cursor-pointer items-center gap-1 text-xs font-medium text-white opacity-100 transition-opacity duration-300 hover:opacity-85 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-1 dark:text-cyan-400 focus-visible:p-2"
            >
              <h2 className="text-base">Menu De Acessibilidade</h2>
              <ChevronRight size={18} strokeWidth={2.2} />
            </button>
          </SheetTrigger>
          <SheetContent className="fixed z-50 gap-4 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm flex h-svh w-full flex-col overflow-y-auto bg-white p-0 dark:bg-gray-800 md:max-w-[613px]">
            <SheetHeader className="flex flex-col space-y-2 text-left">
              <SheetTitle className="text-lg font-semibold h-16 w-full bg-blue-700 dark:border-b dark:border-white dark:bg-gray-900">
                <SheetClose className="mx-5 my-[1.375rem] md:mx-14">
                  <h2 className="text-xl leading-5 text-white">
                    Menu Acessível
                  </h2>
                </SheetClose>
                <SheetClose className="absolute right-4 top-4 rounded-sm opacity-100 ring-offset-background transition-opacity hover:opacity-85 focus:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-1 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-white">
                  <CircleX size={28} />
                  <span className="sr-only">Fechar Menu</span>
                </SheetClose>
              </SheetTitle>
            </SheetHeader>
            <main className="flex flex-1 flex-col gap-8 px-5 pt-14 md:px-14">
              <Link
                href="#content"
                scroll={true}
                className="w-full text-base font-medium leading-5 text-gray-500 select-none hover:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 md:text-lg"
              >
                1 - Conteúdo
              </Link>
              <Separator className="dark:bg-white h-[1px] w-full bg-gray-200 rounded-full" />
              <Link
                href="#menu"
                scroll={true}
                className="w-full text-base font-medium leading-5 text-gray-500 select-none hover:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 md:text-lg"
              >
                2 - Menu
              </Link>
              <Separator className="dark:bg-white h-[1px] w-full bg-gray-200 rounded-full" />
              <Link
                href="#footer"
                scroll={true}
                className="w-full text-base font-medium leading-5 text-gray-500 select-none hover:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 md:text-lg"
              >
                3 - Rodapé
              </Link>
              <Separator className="dark:bg-white h-[1px] w-full bg-gray-200 rounded-full" />
              <Link
                href="/accessibility"
                className="w-full text-base font-medium leading-5 text-gray-500 select-none hover:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 md:text-lg"
              >
                Acessibilidade
              </Link>
              <Separator className="dark:bg-white h-[1px] w-full bg-gray-200 rounded-full" />
              <div className="flex flex-row items-center gap-2">
                <ThemeToggleButton />
              </div>
              <Separator className="dark:bg-white h-[1px] w-full bg-gray-200 rounded-full" />
            </main>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default SubNavigation;
