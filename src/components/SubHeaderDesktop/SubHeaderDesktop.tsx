"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { Separator } from "@radix-ui/react-separator";
import { CircleX, CirclePlus } from "lucide-react";
import Link from "next/link";
import { ButtonThemeToggleDesktop } from "../ButtonThemeToggle/ButtonThemeToggleDesktop";

export function SubHeaderDesktop() {
  return (
    <nav className="sticky top-0 z-20 w-screen min-w-[375px] bg-blue-700 dark:bg-zinc-800 32md:flex">
      <div className="container flex flex-row items-center justify-between px-6 32lg:px-0">
        {/* MODAL COBERTURAS */}
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button
              type="button"
              className="flex items-center justify-center gap-1 cursor-pointer transition-colors duration-200 font-medium text-white hover:text-gray-200 dark:text-cyan-400 dark:hover:text-cyan-500 focus:outline-none focus-visible:text-gray-200 dark:focus-visible:text-cyan-500 text-xs md:text-base md:leading-5"
            >
              Áreas de Cobertura
              <CirclePlus size={12} className="md:size-4" />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

            <Dialog.Content className="no-scrollbar fixed left-[50%] top-[50%] z-50 grid max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-gray-200 bg-white shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg h-[15.6875rem] w-[20.9375rem] p-0 px-6 dark:bg-zinc-900 dark:border-gray-500 md:h-[21.125rem] md:w-[34.875rem] md:p-0 md:pl-12 overflow-hidden">
              <main className="flex flex-col space-y-1.5 text-left">
                <Dialog.Title asChild>
                  <h2 className="text-lg font-semibold leading-none tracking-tight mt-8 md:mt-10">
                    LOGO
                  </h2>
                </Dialog.Title>
                <div className="flex flex-col gap-4 md:gap-7">
                  <div className="flex gap-3 md:flex-col pt-8 md:pt-11">
                    <h3 className="text-base text-gray-900 font-semibold md:text-xl dark:text-white">
                      Áreas de Cobertura:
                    </h3>
                  </div>
                  <ul className="grid grid-cols-2 gap-y-1 ml-1 list-disc list-disc:bg-blue-700 list-inside">
                    <li className="text-gray-600 text-sm font-medium md:text-base dark:text-gray-300">
                      Nova Cigana
                    </li>
                    <li className="text-gray-600 text-sm font-medium md:text-base dark:text-gray-300">
                      Nova Cigana
                    </li>
                    <li className="text-gray-600 text-sm font-medium md:text-base dark:text-gray-300">
                      Nova Cigana
                    </li>
                    <li className="text-gray-600 text-sm font-medium md:text-base dark:text-gray-300">
                      Nova Cigana
                    </li>
                    <li className="text-gray-600 text-sm font-medium md:text-base dark:text-gray-300">
                      Nova Cigana
                    </li>
                    <li className="text-gray-600 text-sm font-medium md:text-base dark:text-gray-300">
                      Nova Cigana
                    </li>
                  </ul>
                  <div className="flex items-start justify-start md:mt-4">
                    <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      <span className="text-sm text-orange-500 font-bold dark:text-cyan-400">
                        *
                      </span>
                      Consulte viabilidade para sua região.
                    </p>
                  </div>
                </div>
              </main>
              <Dialog.Close asChild>
                <button
                  aria-label="Fechar Menu"
                  className="data-[state=open]:bg-gray-600 absolute right-6 top-6 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none focus-visible:opacity-100"
                >
                  <CircleX
                    size={28}
                    className="text-gray-600 dark:text-white"
                  />
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
        <div className="flex flex-row items-center gap-10 h-12">
          <div className="flex flex-row items-center justify-center gap-10">
            <a
              href="#content"
              className="flex items-center text-base font-medium leading-5 text-white hover:text-gray-200 transition-colors duration-200 focus:outline-none focus-visible:text-gray-200"
            >
              1 - Conteúdo
            </a>
            <a
              href="#menu"
              className="flex items-center text-base font-medium leading-5 text-white hover:text-gray-200 transition-colors duration-200 focus:outline-none focus-visible:text-gray-200"
            >
              2 - Menu
            </a>
            <a
              href="#footer"
              className="flex items-center text-base font-medium leading-5 text-white hover:text-gray-200 transition-colors duration-200 focus:outline-none focus-visible:text-gray-200"
            >
              3 - Rodapé
            </a>
          </div>
          <div className="flex flex-row items-center gap-4 h-full">
            <Separator
              orientation="vertical"
              className="h-4 w-[1px] shrink-0 bg-white"
            />
            <Link
              href="/acessibility"
              className="flex items-center text-base font-medium leading-5 text-white hover:text-gray-200 transition-colors duration-200 focus:outline-none focus-visible:text-gray-200"
            >
              Acessibilidade
            </Link>
            <Separator
              orientation="vertical"
              className="h-4 w-[1px] shrink-0 bg-white"
            />
            <ButtonThemeToggleDesktop className="bg-white px-3 dark:bg-cyan-400 text-blue-700 dark:text-zinc-800" />
            <Separator
              orientation="vertical"
              className="h-4 w-[1px] shrink-0 bg-white"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
