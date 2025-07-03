"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { Separator } from "@radix-ui/react-separator";
import { CircleX, CirclePlus, ChevronRight } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io5";
import Link from "next/link";

export function SubHeaderMobile() {
  return (
    <nav className="sticky top-0 z-20 w-screen min-w-[375px] bg-blue-700 dark:bg-zinc-800 32md:hidden">
      <div className="flex flex-col items-end justify-end px-5 md:hidden">
        <a
          href="https://wa.me/558597362750?text=Olá gostaria de saber mais informações sobre os planos de internet."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir WhatsApp Com Mensagem Pré-Preenchida"
          className="flex items-center justify-center transition-colors text-white hover:text-gray-200 duration-200 focus:outline-none focus-visible:text-gray-200 py-3 my-[10px] h-0 text-xs leading-[14px] gap-1"
        >
          <IoLogoWhatsapp size={12} />
          Assine Via WhatsApp
        </a>
        <Separator
          orientation="horizontal"
          className="shrink-0 dark:bg-white w-full h-[1px] bg-blue-950/30 rounded-full"
        />
      </div>
      <div className="flex flex-row items-center justify-between px-5 py-4 md:px-6">
        {/* MODAL COBERTURAS */}
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button
              type="button"
              className="flex items-center justify-center gap-1 cursor-pointer transition-colors duration-200 text-white hover:text-gray-200 dark:text-cyan-400 dark:hover:text-cyan-500 focus:outline-none focus-visible:text-gray-200 dark:focus-visible:text-cyan-500 text-xs md:text-base md:leading-5"
            >
              Áreas de Cobertura
              <CirclePlus size={12} className="md:size-4" />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

            <Dialog.Content
              style={{ willChange: "transform, opacity" }}
              className="no-scrollbar fixed left-[50%] top-[50%] z-50 grid max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-gray-200 bg-white shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg h-[15.6875rem] w-[20.9375rem] p-0 px-6 dark:bg-zinc-900 dark:border-gray-500 md:h-[21.125rem] md:w-[34.875rem] md:p-0 md:pl-12 overflow-hidden"
            >
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
                  <CircleX size={28} className="text-gray-600" />
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
        {/* MENU ACESSÍVEL */}
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button
              aria-label="Abri Menu"
              className="32md:hidden font-medium flex items-center justify-center gap-1 text-base text-white hover:text-gray-200 dark:text-cyan-400 dark:hover:text-cyan-500 focus:outline-none focus-visible:text-gray-200 transition-colors duration-200"
            >
              Menu Acessível
              <ChevronRight size={18} strokeWidth={2.2} />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 backdrop-blur-sm data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut transition-opacity duration-300 ease-in-out" />
            <Dialog.Content
              style={{ willChange: "transform, opacity" }}
              className="fixed z-50 shadow-lg data-[state=open]:animate-enterFromRight data-[state=closed]:animate-exitToRight transition-all duration-500 ease-in-out inset-y-0 right-0 h-full sm:max-w-sm md:max-w-[613px] w-full overflow-y-auto bg-white dark:bg-zinc-800 border-l"
            >
              <Dialog.Title asChild>
                <h2 className="text-lg font-semibold sticky top-0 z-[2] h-16 w-full bg-blue-700 dark:bg-zinc-900 md:flex ">
                  <span className="select-none w-fit flex items-center gap-2 text-lg md:text-xl py-[1.375rem] px-6 font-semibold leading-5 text-white dark:text-cyan-400">
                    MENU ACESSÍVEL
                  </span>
                  <Dialog.Close asChild>
                    <button
                      aria-label="Fechar Menu"
                      className="data-[state=open]:bg-gray-600 absolute right-[1.5rem] top-[1.063rem] rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none focus-visible:opacity-100"
                    >
                      <CircleX size={28} className="text-white" />
                    </button>
                  </Dialog.Close>
                </h2>
              </Dialog.Title>
              <main className="flex flex-col px-5">
                <a
                  href="#content"
                  className="cursor-pointer flex items-center justify-between gap-2 text-lg md:text-xl pt-10 pb-8 font-semibold leading-5 text-gray-600 border-b border-gray-300 hover:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 transition-colors duration-200 focus:outline-none focus-visible:text-blue-500"
                >
                  1 - Conteúdo
                </a>
                <a
                  href="#menu"
                  className="cursor-pointer flex items-center justify-between gap-2 text-lg md:text-xl pt-10 pb-8 font-semibold leading-5 text-gray-600 border-b border-gray-300 hover:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 transition-colors duration-200 focus:outline-none focus-visible:text-blue-500"
                >
                  2 - Menu
                </a>
                <a
                  href="#footer"
                  className="cursor-pointer flex items-center justify-between gap-2 text-lg md:text-xl pt-10 pb-8 font-semibold leading-5 text-gray-600 border-b border-gray-300 hover:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 transition-colors duration-200 focus:outline-none focus-visible:text-blue-500"
                >
                  3 - Rodapé
                </a>
                <Link
                  href="/acessibility"
                  className="cursor-pointer flex items-center justify-between gap-2 text-lg md:text-xl pt-10 pb-8 font-semibold leading-5 text-gray-600 border-b border-gray-300 hover:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 transition-colors duration-200 focus:outline-none focus-visible:text-blue-500"
                >
                  Acessibilidade
                </Link>
              </main>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </nav>
  );
}
