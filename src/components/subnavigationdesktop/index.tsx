"use client";

import React from "react";
import { CirclePlus } from "lucide-react";
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

const SubNavigationDesktop = () => {
  return (
    <nav className="sticky hidden top-0 z-20 w-screen min-w-[375px] bg-blue-700 dark:bg-gray-800 32md:flex">
      <div className="container flex flex-row items-center justify-between px-6 py-4 32lg:px-0">
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
        <div className="flex flex-row items-center gap-10">
          <div className="flex flex-row items-center justify-center gap-10">
            <Link
              href="#content"
              scroll={true}
              className="text-base font-medium leading-5 text-white transition-opacity
              opacity-100 select-none hover:opacity-85"
            >
              1 - Conteúdo
            </Link>
            <Link
              href="#content"
              scroll={true}
              className="text-base font-medium leading-5 text-white transition-opacity
              opacity-100 select-none hover:opacity-85"
            >
              2 - Menu
            </Link>
            <Link
              href="#footer"
              scroll={true}
              className="text-base font-medium leading-5 text-white transition-opacity
              opacity-100 select-none hover:opacity-85"
            >
              3 - Rodapé
            </Link>
          </div>
          <div className="flex flex-row items-center gap-4">
            <Separator
              orientation="vertical"
              className="bg-white h-4 w-[1px] rounded-full"
            />
            <Link
              href="/accessibility"
              className="text-base font-medium leading-5 text-white transition-opacity
              opacity-100 select-none hover:opacity-85 dark:text-cyan-400 dark:hover:text-cyan-500"
            >
              Acessibilidade
            </Link>
            <Separator
              orientation="vertical"
              className="bg-white h-4 w-[1px] rounded-full"
            />
            <ThemeToggleButton className="bg-white text-blue-700 md:text-base hover:text-white hover:bg-transparent hover:border hover:border-white h-7 dark:text-white dark:hover:bg-transparent dark:hover:border-cyan-400 dark:hover:text-cyan-400" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SubNavigationDesktop;
