"use client";

import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  AlignJustify,
  CircleX,
  UserRound,
  PhoneCall,
  Mail,
  CircleUser,
} from "lucide-react";
import { RiWhatsappLine } from "react-icons/ri";
import { RiGooglePlayFill } from "react-icons/ri";
import { Separator } from "@radix-ui/react-separator";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useEffect, useState } from "react";

const Header = () => {
  const handleClick = () => {
    const phone = "5585997362750";
    const message = encodeURIComponent(
      "Olá, quero saber mais sobre os planos de internet fibra óptica!"
    );
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

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
        <nav className="flex h-[3.75rem] w-dvw items-center justify-between bg-gray-100 px-5 dark:bg-zinc-900 md:px-6">
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
                <div className="w-8 h-8 bg-blue-700 rounded-sm flex items-center justify-center group-hover:bg-transparent transition-colors duration-300 text-white group-hover:text-blue-700 border group-hover:border-blue-700 dark:border-white dark:bg-transparent dark:bg-cyan-400 dark:group-hover:bg-transparent dark:group-hover:border-cyan-400 dark:group-hover:text-cyan-400">
                  <span className="sr-only">Ícone Menu</span>
                  <AlignJustify size={24} />
                </div>
              </button>
            </SheetTrigger>
            <SheetContent className="fixed z-50 gap-4 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm flex w-full flex-col overflow-y-auto bg-white p-0 dark:bg-zinc-800 md:max-w-[613px] h-full md:gap-0">
              <SheetTitle className="text-lg font-semibold h-16 w-full bg-blue-700 dark:border-b dark:border-b-gray-500 dark:bg-zinc-900">
                {/* Drawer Menu Lateral Residencial */}
                <Sheet open={sheetOpenTwo} onOpenChange={setSheetOpenTwo}>
                  <SheetTrigger asChild>
                    <button
                      type="button"
                      className="group mx-5 my-[1.375rem] md:mx-14 select-none"
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
                  <SheetContent className="fixed z-50 gap-4 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 border-l border-b data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm flex w-full flex-col overflow-y-auto bg-white p-0 dark:bg-zinc-800 md:max-w-[613px] h-[20.75rem]">
                    <SheetTitle className="text-lg font-semibold h-16 w-full bg-blue-700 dark:border-b dark:border-gray-500 dark:bg-zinc-900">
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
                  className="text-base font-normal text-gray-600 dark:text-white select-none"
                >
                  Indique e Ganhe
                </Link>
              </div>
              <div className="flex items-center gap-10 w-full h-14 bg-gray-200 px-5 dark:bg-zinc-900 md:px-14">
                {/* Drawer Menu Lateral Assine Agora */}
                <Sheet open={sheetOpenThree} onOpenChange={setSheetOpenThree}>
                  <SheetTrigger asChild>
                    <button
                      type="button"
                      className="flex items-center justify-center gap-2 hover:cursor-pointer select-none"
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
                  <SheetContent className="fixed z-50 gap-4 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm flex w-full flex-col overflow-y-auto bg-white p-0 dark:bg-zinc-800 md:max-w-[613px] h-full">
                    <SheetTitle className="text-lg font-semibold sticky top-0 z-[2] h-16 w-full border-b-[1px] border-gray-200 bg-white dark:border-gray-600 dark:bg-zinc-900">
                      <div className="px-5 md:px-14 flex items-center justify-start h-full">
                        <h2 className="text-xl font-semibold left-5 text-blue-700 dark:text-white select-none">
                          Assine Agora
                        </h2>
                      </div>
                      <SheetClose className="absolute right-4 top-4 rounded-sm opacity-100 ring-offset-background transition-opacity hover:opacity-85 focus:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-1 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-gray-500 dark:text-white">
                        <CircleX size={28} />
                        <span className="sr-only">Fechar Menu</span>
                      </SheetClose>
                    </SheetTitle>
                    <main className="mt-8 flex flex-col px-5 md:px-14">
                      <div className="mb-1 flex flex-col border-b border-gray-200 dark:border-gray-600">
                        <h2 className="text-base font-semibold text-blue-700 dark:text-white select-none">
                          ASSINE AGORA VIA WHATSAPP OU E-MAIL:
                        </h2>
                        <div className="mt-6 flex items-center justify-start gap-1 md:gap-2">
                          <UserRound
                            size={16}
                            strokeWidth={2.8}
                            className="text-gray-600 dark:text-white"
                          />
                          <h2 className="font-semibold text-gray-600 dark:text-white select-none">
                            PARA VOCÊ
                          </h2>
                        </div>
                        <div className="mt-5 flex flex-col">
                          <div className=" mb-6 ml-6 flex flex-col gap-1">
                            <div className="flex items-center gap-1 select-none">
                              <span className="sr-only">
                                Ícone de um Smartphone
                              </span>
                              <PhoneCall
                                size={12}
                                strokeWidth={2.5}
                                className="text-gray-700 dark:text-cyan-400"
                              />
                              <h2 className="text-sm font-medium text-gray-700 dark:text-cyan-400">
                                Assine Via Ligação
                              </h2>
                            </div>
                            <p className="text-xs font-medium text-gray-500 dark:text-cyan-400 ml-4">
                              <a href="tel:+5585997362750">(85) 9 9736-2750</a>
                            </p>
                          </div>
                          <div className=" mb-6 ml-6 flex flex-col gap-1">
                            <div className="flex items-center gap-1 select-none">
                              <span className="sr-only">Ícone do WhatsApp</span>
                              <RiWhatsappLine
                                size={13}
                                strokeWidth={0.3}
                                className="text-gray-700 dark:text-cyan-400"
                              />
                              <h2 className="text-sm font-medium text-gray-700 dark:text-cyan-400">
                                Assine Via WhatsApp
                              </h2>
                            </div>
                            <button
                              onClick={handleClick}
                              className="text-left text-xs font-medium text-gray-500 dark:text-cyan-400 ml-4"
                            >
                              (85) 9 9736-2750
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="mb-1 mt-8 flex flex-col border-b border-gray-200 dark:border-gray-600">
                        <div className="mt-6 flex items-center justify-start gap-1 md:gap-2">
                          <UserRound
                            size={16}
                            strokeWidth={2.8}
                            className="text-gray-600 dark:text-white"
                          />
                          <h2 className="font-semibold text-gray-600 dark:text-white select-none">
                            PARA EMPRESAS
                          </h2>
                        </div>
                        <div className="mt-5 flex flex-col">
                          <div className="mt-5 flex flex-col">
                            <div className=" mb-6 ml-6 flex flex-col gap-1">
                              <div className="flex items-center gap-1 select-none">
                                <span className="sr-only">
                                  Ícone de um Smartphone
                                </span>
                                <PhoneCall
                                  size={12}
                                  strokeWidth={2.5}
                                  className="text-gray-700 dark:text-cyan-400"
                                />
                                <h2 className="text-sm font-medium text-gray-700 dark:text-cyan-400">
                                  Assine Via Ligação
                                </h2>
                              </div>
                              <p className="text-xs font-medium text-gray-500 dark:text-cyan-400 ml-4">
                                <a href="tel:+5585997362750">
                                  (85) 9 9736-2750
                                </a>
                              </p>
                            </div>
                            <div className=" mb-6 ml-6 flex flex-col gap-1">
                              <div className="flex items-center gap-1 select-none">
                                <span className="sr-only">
                                  Ícone do WhatsApp
                                </span>
                                <RiWhatsappLine
                                  size={13}
                                  strokeWidth={0.3}
                                  className="text-gray-700 dark:text-cyan-400"
                                />
                                <h2 className="text-sm font-medium text-gray-700 dark:text-cyan-400">
                                  Assine Via WhatsApp
                                </h2>
                              </div>
                              <button
                                onClick={handleClick}
                                className="text-left text-xs font-medium text-gray-500 dark:text-cyan-400 ml-4"
                              >
                                (85) 9 9736-2750
                              </button>
                            </div>
                            <div className=" mb-6 ml-6 flex flex-col gap-1">
                              <div className="flex items-center gap-1 select-none">
                                <span className="sr-only">Ícone do Email</span>
                                <Mail
                                  size={12}
                                  strokeWidth={2.5}
                                  className="text-gray-700 dark:text-cyan-400"
                                />
                                <h2 className="text-sm font-medium text-gray-700 dark:text-cyan-400">
                                  Assine Via E-Mail
                                </h2>
                              </div>
                              <p>
                                <a href="mailto:evolutionnet221@gmail.com"></a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </main>
                  </SheetContent>
                </Sheet>
                {/* Drawer Menu Lateral Área do Cliente */}
                <Sheet open={sheetOpenFour} onOpenChange={setSheetOpenFour}>
                  <SheetTrigger asChild>
                    <button
                      type="button"
                      className="flex items-center justify-center gap-2 hover:cursor-pointer select-none"
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
                  <SheetContent className="fixed z-50 gap-4 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm flex w-full flex-col overflow-y-auto bg-white p-0 dark:bg-zinc-800 md:max-w-[613px] h-full">
                    <SheetTitle className="text-lg font-semibold sticky top-0 z-[2] h-16 w-full border-b-[1px] border-gray-200 bg-white dark:border-gray-600 dark:bg-zinc-900">
                      <div className="px-5 md:px-14 flex items-center justify-start h-full">
                        <h2 className="text-xl font-semibold left-5 text-blue-700 dark:text-white select-none">
                          Área do Cliente
                        </h2>
                      </div>
                      <SheetClose className="absolute right-4 top-4 rounded-sm opacity-100 ring-offset-background transition-opacity hover:opacity-85 focus:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-1 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-gray-500 dark:text-white">
                        <CircleX size={28} />
                        <span className="sr-only">Fechar Menu</span>
                      </SheetClose>
                    </SheetTitle>
                    <main className="mt-8 flex flex-col gap-8 px-5 md:px-14">
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-row items-center gap-2">
                          <CircleUser
                            size={20}
                            strokeWidth={2.5}
                            className="text-gray-700 dark:text-white"
                          />
                          <h2 className="text-lg font-semibold left-5 text-gray-700 dark:text-white select-none">
                            Área do Cliente
                          </h2>
                        </div>
                        <p className="w-[270px] select-none text-base left-5 text-gray-500 dark:text-white md:w-full">
                          Tenha acesso a suas faturas, informações do plano e
                          muito mais.
                        </p>
                        <p className="text-blue-700 dark:text-cyan-400 select-none">
                          Baixe o App Meu Provedor
                        </p>
                        <div className="flex items-center gap-6">
                          <button type="button">
                            <a
                              href="https://play.google.com/store/apps/details?id=br.net.tsmx.meuappprovedor&hl=pt-Br"
                              target="_blank"
                              className="group flex items-center justify-center gap-3 rounded-lg border py-2 transition-colors duration-500 dark:border-cyan-400 dark:bg-cyan-400 hover:border-blue-700 bg-blue-700 dark:hover:bg-cyan-500 h-[2.4375rem] w-[8.5rem] select-none"
                            >
                              <RiGooglePlayFill
                                size={20}
                                className="text-white dark:text-zinc-800 dark:group-hover:text-white"
                              />
                              <div className="m-0 flex flex-col">
                                <p className="text-[0.6rem] font-medium group-hover:text-white dark:group-hover:text-white text-white dark:text-zinc-800 leading-[0.7rem]">
                                  Instale Via
                                </p>
                                <p className="text-xs font-semibold group-hover:text-white dark:group-hover:text-white text-white dark:text-zinc-800 leading-3">
                                  Google Play
                                </p>
                              </div>
                            </a>
                          </button>
                          <button type="button">
                            <a
                              href="https://apps.apple.com/br/app/meuappprovedor/id1637448837"
                              target="_blank"
                              className="group flex items-center justify-center gap-3 rounded-lg border py-2 transition-colors duration-500 dark:border-cyan-400 dark:bg-cyan-400 hover:border-blue-700 bg-blue-700 dark:hover:bg-cyan-500 h-[2.4375rem] w-[8.5rem] select-none"
                            >
                              <RiGooglePlayFill
                                size={20}
                                className="text-white dark:text-zinc-800 dark:group-hover:text-white"
                              />
                              <div className="m-0 flex flex-col">
                                <p className="text-[0.6rem] font-medium group-hover:text-white dark:group-hover:text-white text-white dark:text-zinc-800 leading-[0.7rem]">
                                  Instale Via
                                </p>
                                <p className="text-xs font-semibold group-hover:text-white dark:group-hover:text-white text-white dark:text-zinc-800 leading-3">
                                  Apple Store
                                </p>
                              </div>
                            </a>
                          </button>
                        </div>
                        <p>Ou Acesse Nossa Central do Assinante</p>
                        <button type="button"></button>
                      </div>
                      <Separator className="dark:bg-white h-[1px] w-full bg-gray-200 rounded-full" />
                    </main>
                  </SheetContent>
                </Sheet>
              </div>
              <main className="mt-8 flex flex-col px-5 md:px-14">
                {/* Drawer Menu Lateral Internet Fibra */}
                <Sheet open={sheetOpenFive} onOpenChange={setSheetOpenFive}>
                  <SheetTrigger asChild>
                    <button
                      type="button"
                      className="flex items-center justify-between gap-2 hover:cursor-pointer border-b border-gray-200 pt-10 pb-8 dark:border-white group select-none"
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
                  <SheetContent className="fixed z-50 gap-4 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm flex h-svh w-full flex-col overflow-y-auto bg-white p-0 dark:bg-zinc-800 md:max-w-[613px]">
                    <SheetTitle className="text-lg font-semibold h-16 w-full bg-blue-700 dark:border-b dark:border-white dark:bg-zinc-900">
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
                  <h2 className="text-base font-semibold leading-5 text-gray-600 dark:text-cyan-400 dark:group-hover:text-cyan-500 md:text-lg select-none">
                    Nossos Combos
                  </h2>
                </Link>
                {/* Drawer Menu Lateral Streaming */}
                <Sheet open={sheetOpenSix} onOpenChange={setSheetOpenSix}>
                  <SheetTrigger asChild>
                    <button
                      type="button"
                      className="flex items-center justify-between gap-2 hover:cursor-pointer border-b border-gray-200 pt-10 pb-8 dark:border-white group select-none"
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
                  <SheetContent className="fixed z-50 gap-4 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm flex h-svh w-full flex-col overflow-y-auto bg-white p-0 dark:bg-zinc-800 md:max-w-[613px]">
                    <SheetTitle className="text-lg font-semibold h-16 w-full bg-blue-700 dark:border-b dark:border-white dark:bg-zinc-900">
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
                  className="flex items-center justify-between gap-2 hover:cursor-pointer border-b border-gray-200 pt-10 pb-8 dark:border-white group select-none"
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
