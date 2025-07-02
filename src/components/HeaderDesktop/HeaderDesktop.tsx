"use client";

import React from "react";
import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import {
  ChevronDown,
  CircleArrowRight,
  UserRound,
  PhoneCall,
  Mail,
  Download,
} from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io5";
import { RiBuilding2Line } from "react-icons/ri";
import { FaGooglePlay } from "react-icons/fa";
import { Separator } from "@radix-ui/react-separator";

const HeaderDesktop = () => {
  return (
    <header className="z-10 hidden min-w-[375px] bg-gray-100 flex-col items-center dark:bg-zinc-900 32md:flex">
      <div className="flex w-full flex-col">
        <div className="container hidden h-[3.75rem] items-center justify-between md:h-[5.5rem] md:px-6 32lg:px-0 32md:flex">
          <div className="flex items-center justify-between gap-11">
            <Link href="/">
              <span className="sr-only">
                Link Para Redirecionar Para a Tela Inicial do Site
              </span>
              LOGO
            </Link>
            {/* Navigation DropDonw Left */}
            <NavigationMenu.Root className="relative items-start justify-start container z-[2] hidden 32md:flex">
              <NavigationMenu.List className="group flex flex-1 list-none items-center justify-start h-[4.75rem] gap-6 space-x-0 xl:gap-10">
                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 m-0 select-none p-0 focus:outline-none"
                    href="/"
                  >
                    <div className="flex flex-col items-center justify-center gap-2">
                      <span className="leading-5 text-gray-600 hover:text-blue-700 group-focus:text-blue-800 dark:text-cyan-400 dark:hover:text-cyan-500 dark:group-focus:text-cyan-500 md:text-sm lg:text-base font-medium">
                        Residencial
                      </span>
                    </div>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded leading-5 text-gray-600 hover:text-blue-700 group-focus:text-blue-800 dark:text-cyan-400 dark:hover:text-cyan-500 dark:group-focus:text-cyan-500 md:text-sm lg:text-base font-medium transition-colors duration-300 focus:outline-none">
                    <h2 className="leading-5 text-gray-600 hover:text-blue-700 group-focus:text-blue-800 dark:text-cyan-400 dark:hover:text-cyan-500 dark:group-focus:text-cyan-500 md:text-sm lg:text-base group-focus-visible:text-blue-700 group-data-[active]:bg-blue-700 group-data-[state=open]:text-blue-700 dark:group-data-[state=open]:text-cyan-400">
                      Empresarial
                    </h2>
                    <span className="sr-only">Seta Apontada Para Baixo</span>
                    <ChevronDown
                      size={20}
                      strokeWidth={2.1}
                      className="relative top-0 ml-1 text-gray-600 group-focus-visible:text-blue-700 group-data-[state=open]:text-blue-700 dark:text-cyan-400 dark:group-focus:text-cyan-500 dark:group-data-[state=open]:text-cyan-500"
                      aria-hidden
                    />
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="left-0 top-0 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute hidden md:w-auto rounded-lg border-none bg-white shadow-lg dark:bg-zinc-800 32md:block select-none">
                    <main className="flex flex-col items-start justify-start px-10 pt-14 h-[20.625rem] w-[23.5rem]">
                      <div className="flex flex-col">
                        <h2 className="text-gray-600 text-base leading-5 dark:text-white">
                          Plano Empresariais:
                        </h2>
                        <p className="mb-4 w-[17.25rem] text-sm text-gray-500 dark:text-gray-300">
                          A solução para a sua empresa está aqui!
                        </p>
                        <NavigationMenu.Link asChild>
                          <Link
                            href="/companies"
                            className="group cursor-pointer transition-all duration-500 focus-visible:p-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 dark:focus-visible:ring-cyan-400 flex w-[14.1rem] flex-row items-center gap-2"
                          >
                            <span className="text-blue-700 font-medium text-base leading-5 group-hover:underline group-hover:text-blue-500 dark:text-cyan-400 dark:group-hover:text-cyan-500">
                              Acessar Página Empresarial
                            </span>
                            <CircleArrowRight
                              size={16}
                              strokeWidth={2.3}
                              className="text-blue-700 group-hover:text-blue-500 dark:text-cyan-400 dark:group-hover:text-cyan-500"
                            />
                          </Link>
                        </NavigationMenu.Link>
                      </div>
                      <div className="flex flex-col mt-10">
                        <h2 className="text-gray-600 text-base leading-5 dark:text-white">
                          Assine Agora:
                        </h2>
                        <p className="mb-4 w-[17.25rem] text-sm text-gray-500 dark:text-gray-300">
                          (85) 9 9736-2750
                        </p>
                        <NavigationMenu.Link asChild>
                          <a
                            href="https://wa.me/558597362750?text=Olá gostaria de saber mais informações sobre os planos de internet."
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Abrir WhatsApp Com Mensagem Pré-Preenchida"
                            className="group cursor-pointer transition-all duration-500 focus-visible:p-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 dark:focus-visible:ring-cyan-400 flex w-[14.1rem] flex-row items-center gap-2"
                          >
                            <span className="text-blue-700 font-medium text-base leading-5 group-hover:underline group-hover:text-blue-500 dark:text-cyan-400 dark:group-hover:text-cyan-500">
                              Assine Agora
                            </span>
                            <CircleArrowRight
                              size={16}
                              strokeWidth={2.3}
                              className="text-blue-700 group-hover:text-blue-500 dark:text-cyan-400 dark:group-hover:text-cyan-500"
                            />
                          </a>
                        </NavigationMenu.Link>
                      </div>
                    </main>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 m-0 select-none p-0 focus:outline-none"
                    href="/indicate"
                  >
                    <div className="flex flex-col items-center justify-center gap-2">
                      <span className="leading-5 text-gray-600 hover:text-blue-700 group-focus:text-blue-800 dark:text-cyan-400 dark:hover:text-cyan-500 dark:group-focus:text-cyan-500 md:text-sm lg:text-base">
                        Indique e Ganhe
                      </span>
                    </div>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Indicator className="top-[90%] z-[0] flex h-4 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in">
                  <div className="relative top-full h-[26px] w-[28px] rotate-45 rounded-tl-sm bg-white shadow-md dark:bg-zinc-800" />
                </NavigationMenu.Indicator>
              </NavigationMenu.List>

              <div className="absolute left-6 top-[95%] flex justify-center xl:left-0">
                <NavigationMenu.Viewport className="origin-top-center text-popover-foreground relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)] border-none shadow-xl" />
              </div>
            </NavigationMenu.Root>
          </div>
          <div className="flex h-10 items-center justify-center gap-2 32lg:gap-8">
            <Separator
              orientation="vertical"
              className="shrink-0 dark:bg-white w-[1px] h-10 bg-gray-200"
            />
            {/* Navigation DropDown Right */}
            <NavigationMenu.Root className="relative items-start justify-start container z-[2] hidden 32md:flex">
              <NavigationMenu.List className="group flex flex-1 list-none items-center justify-start h-[4.75rem] gap-6 space-x-0 xl:gap-10">
                <NavigationMenu.Item>
                  <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded leading-5 text-gray-600 hover:text-blue-700 group-focus:text-blue-800 dark:text-cyan-400 dark:hover:text-cyan-500 dark:group-focus:text-cyan-500 md:text-sm lg:text-base font-medium transition-colors duration-300 focus:outline-none">
                    <h2 className="leading-5 text-gray-600 hover:text-blue-700 group-focus:text-blue-800 dark:text-cyan-400 dark:hover:text-cyan-500 dark:group-focus:text-cyan-500 md:text-sm lg:text-base group-focus-visible:text-blue-700 group-data-[active]:bg-blue-700 group-data-[state=open]:text-blue-700 dark:group-data-[state=open]:text-cyan-400">
                      Assine Agora
                    </h2>
                    <span className="sr-only">Seta Apontada Para Baixo</span>
                    <ChevronDown
                      size={20}
                      strokeWidth={2.1}
                      className="relative top-0 ml-1 text-gray-600 group-focus-visible:text-blue-700 group-data-[state=open]:text-blue-700 dark:text-cyan-400 dark:group-focus:text-cyan-500 dark:group-data-[state=open]:text-cyan-500"
                      aria-hidden
                    />
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="left-0 top-0 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute hidden md:w-auto rounded-lg border-none bg-white shadow-lg dark:bg-zinc-800 32md:block select-none">
                    <main className="hidden w-[38rem] rounded-lg border-none bg-white shadow-xl dark:bg-zinc-800 32md:block">
                      <div className="flex flex-col p-6">
                        <h2 className="text-blue-700 font-medium text-base leading-5 dark:text-white select-none">
                          ASSINE AGORA POR TELEFONE OU POR EMAIL:
                        </h2>
                        <div className="flex flex-row justify-normal mt-8">
                          <div className="flex flex-col pr-16">
                            <div className="flex items-center justify-start gap-1 32md:gap-2">
                              <div className="w-3 h-3 flex items-center justify-center">
                                <span className="sr-only">Ícone de Pessoa</span>
                                <UserRound size={12} strokeWidth={2.7} />
                              </div>
                              <h3 className="select-none font-semibold tracking-[0.0375rem] text-gray-500 dark:text-white text-xs">
                                PARA VOCÊ
                              </h3>
                            </div>
                            <div className="ml-4 mt-5 flex flex-col justify-between h-full">
                              <div className="flex flex-col">
                                <div className="mb-7 flex flex-col ml-0 gap-0">
                                  <div className="flex items-center gap-1">
                                    <div className="w-4 h-4 flex items-center justify-center">
                                      <span className="sr-only">
                                        Ícone De Telefone
                                      </span>
                                      <PhoneCall
                                        size={16}
                                        strokeWidth={1.8}
                                        className="text-gray-600 dark:text-white"
                                      />
                                    </div>
                                    <h2 className="text-sm font-medium text-gray-600 dark:text-white">
                                      Assine via Ligação
                                    </h2>
                                  </div>
                                  <NavigationMenu.Link asChild>
                                    <a
                                      href="tel:+558597362750"
                                      aria-label="Ligar Para o Número (85) 9 9736-2750"
                                      className="ml-5 text-xs font-medium text-gray-500 dark:text-gray-300"
                                    >
                                      (85) 9 9736-2750
                                    </a>
                                  </NavigationMenu.Link>
                                </div>
                                <div className="mb-7 flex flex-col ml-0 gap-0">
                                  <div className="flex items-center gap-1">
                                    <div className="w-4 h-4 flex items-center justify-center">
                                      <span className="sr-only">
                                        Ícone De WhatsApp
                                      </span>
                                      <IoLogoWhatsapp
                                        size={16}
                                        className="text-gray-600 dark:text-white"
                                      />
                                    </div>
                                    <h2 className="text-sm font-medium text-gray-600 dark:text-white">
                                      Assine via WhatsApp
                                    </h2>
                                  </div>
                                  <NavigationMenu.Link asChild>
                                    <a
                                      href="https://wa.me/558597362750?text=Olá gostaria de saber mais informações sobre os planos de internet residencial."
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      aria-label="Abrir WhatsApp Com Mensagem Pré-Preenchida"
                                      className="ml-5 text-xs font-medium text-gray-500 dark:text-gray-300"
                                    >
                                      (85) 9 9736-2750
                                    </a>
                                  </NavigationMenu.Link>
                                </div>
                              </div>
                              <NavigationMenu.Link asChild>
                                <a
                                  href="https://wa.me/558597362750?text=Olá gostaria de saber mais informações sobre os planos de internet residencial."
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label="Abrir WhatsApp Com Mensagem Pré-Preenchida"
                                  className="bg-blue-700 flex items-center justify-center hover:bg-blue-500 dark:bg-cyan-400 dark:hover:bg-cyan-500 rounded-md py-2"
                                >
                                  <span className="text-white dark:text-zinc-800 text-cente font-medium">
                                    ASSINE AGORA
                                  </span>
                                </a>
                              </NavigationMenu.Link>
                            </div>
                          </div>
                          <Separator
                            orientation="vertical"
                            className="shrink-0 dark:bg-white w-[1px] h-56 bg-gray-200"
                          />
                          <div className="flex flex-col ml-8">
                            <div className="flex items-center justify-start gap-1 32md:gap-2">
                              <div className="w-3 h-3 flex items-center justify-center">
                                <span className="sr-only">
                                  Ícone de Empresa
                                </span>
                                <RiBuilding2Line size={12} strokeWidth={0.8} />
                              </div>
                              <h3 className="select-none font-semibold tracking-[0.0375rem] text-gray-500 dark:text-white text-xs">
                                PARA A SUA EMPRESA
                              </h3>
                            </div>
                            <div className="ml-4 mt-5 flex flex-col">
                              <div className="flex flex-col">
                                <div className="mb-7 flex flex-col ml-0 gap-0">
                                  <div className="flex items-center gap-1">
                                    <div className="w-4 h-4 flex items-center justify-center">
                                      <span className="sr-only">
                                        Ícone de Telefone
                                      </span>
                                      <PhoneCall
                                        size={16}
                                        strokeWidth={1.8}
                                        className="text-gray-600 dark:text-white"
                                      />
                                    </div>
                                    <h2 className="text-sm font-medium text-gray-600 dark:text-white">
                                      Assine via Ligação
                                    </h2>
                                  </div>
                                  <p className="ml-5 text-xs font-medium text-gray-500 dark:text-gray-300">
                                    (85) 9 9736-2750
                                  </p>
                                </div>
                                <div className="mb-7 flex flex-col ml-0 gap-0">
                                  <div className="flex items-center gap-1">
                                    <div className="w-4 h-4 flex items-center justify-center">
                                      <span className="sr-only">
                                        Ícone do WhatsApp
                                      </span>
                                      <IoLogoWhatsapp
                                        size={16}
                                        className="text-gray-600 dark:text-white"
                                      />
                                    </div>
                                    <h2 className="text-sm font-medium text-gray-600 dark:text-white">
                                      Assine via WhatsApp
                                    </h2>
                                  </div>
                                  <NavigationMenu.Link asChild>
                                    <a
                                      href="https://wa.me/558597362750?text=Olá gostaria de saber mais informações sobre os planos de internet residencial."
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      aria-label="Abrir WhatsApp Com Mensagem Pré-Preenchida"
                                      className="ml-5 text-xs font-medium text-gray-500 dark:text-gray-300"
                                    >
                                      (85) 9 9736-2750
                                    </a>
                                  </NavigationMenu.Link>
                                </div>
                              </div>
                              <div className="mb-7 flex flex-col ml-0 gap-0">
                                <div className="flex items-center gap-1">
                                  <div className="w-4 h-4 flex items-center justify-center">
                                    <span className="sr-only">
                                      Ícone de Email
                                    </span>
                                    <Mail
                                      size={16}
                                      strokeWidth={1.8}
                                      className="text-gray-600 dark:text-white"
                                    />
                                  </div>
                                  <h2 className="text-sm font-medium text-gray-600 dark:text-white">
                                    Assine via E-mail
                                  </h2>
                                </div>
                                <NavigationMenu.Link asChild>
                                  <a
                                    href="mailto:contato@exemplo.com"
                                    className="ml-5 text-xs font-medium text-gray-500 dark:text-gray-300"
                                  >
                                    evolutionnet221@gmail.com
                                  </a>
                                </NavigationMenu.Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </main>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded leading-5 text-gray-600 hover:text-blue-700 group-focus:text-blue-800 dark:text-cyan-400 dark:hover:text-cyan-500 dark:group-focus:text-cyan-500 md:text-sm lg:text-base font-medium transition-colors duration-300 focus:outline-none">
                    <h2 className="leading-5 text-gray-600 hover:text-blue-700 group-focus:text-blue-800 dark:text-cyan-400 dark:hover:text-cyan-500 dark:group-focus:text-cyan-500 md:text-sm lg:text-base group-focus-visible:text-blue-700 group-data-[active]:bg-blue-700 group-data-[state=open]:text-blue-700 dark:group-data-[state=open]:text-cyan-400">
                      Área do Cliente
                    </h2>
                    <span className="sr-only">Seta Apontada Para Baixo</span>
                    <ChevronDown
                      size={20}
                      strokeWidth={2.1}
                      className="relative top-0 ml-1 text-gray-600 group-focus-visible:text-blue-700 group-data-[state=open]:text-blue-700 dark:text-cyan-400 dark:group-focus:text-cyan-500 dark:group-data-[state=open]:text-cyan-500"
                      aria-hidden
                    />
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="left-0 top-0 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute hidden md:w-auto rounded-lg border-none bg-white shadow-lg dark:bg-zinc-800 32md:block select-none">
                    <main className="hidden w-[25rem] rounded-xl border-none bg-white shadow-xl dark:bg-zinc-800 32md:block">
                      <div className="flex flex-col justiify-between p-6 gap-6">
                        <div className="flex flex-col">
                          <h2 className="text-base font-semibold text-blue-700 dark:text-white leading-6">
                            ACESSE NOSSA ÁREA DE CLIENTES:
                          </h2>
                          <div className="mt-8 flex flex-col">
                            <p className="text-gray-500 text-sm font-medium leading-4 dark:text-gray-300 mb-7">
                              Tenha acesso a suas faturas, informações do seu
                              plano e muito mais.
                            </p>
                            <div className="flex flex-col gap-3">
                              <div className="flex flex-row items-center justify-start gap-1">
                                <h3 className="text-gray-700 text-base font-semibold leading-6 dark:text-cyan-400">
                                  Instale o App Meu Provedor
                                </h3>
                                <div className="w-3 h-3 flex items-center justify-center">
                                  <span className="sr-only">
                                    Ícone de Download
                                  </span>
                                  <Download
                                    size={12}
                                    strokeWidth={2.8}
                                    className="text-gray-700 dark:text-cyan-400"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-row items-center gap-5">
                                <NavigationMenu.Link asChild>
                                  <a
                                    href="https://apps.apple.com/br/app/meuappprovedor/id1637448837"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Abrir Google Play para Instalar o App Meu Provedor"
                                    className="group flex items-center justify-center gap-3 rounded-md py-2 transition-colors duration-300 bg-blue-700 hover:bg-blue-500 dark:bg-cyan-400 dark:hover:bg-cyan-500 w-[8.5rem] h-[2.4375rem]"
                                  >
                                    <div className="w-5 h-5 flex items-center justify-center">
                                      <span className="sr-only">
                                        Ícone da Google Play Store
                                      </span>
                                      <FaGooglePlay
                                        size={20}
                                        className="text-white dark:text-zinc-800"
                                      />
                                    </div>
                                    <div className="m-0 flex flex-col">
                                      <p className="text-[0.6rem] leading-[0.7rem] text-white dark:text-zinc-800 font-medium">
                                        Download Via
                                      </p>
                                      <p className="text-white text-xs leading-3 dark:text-zinc-800 font-semibold">
                                        Google Play
                                      </p>
                                    </div>
                                  </a>
                                </NavigationMenu.Link>
                                <NavigationMenu.Link asChild>
                                  <a
                                    href="https://play.google.com/store/apps/details?id=br.net.tsmx.meuappprovedor&hl=pt-Br"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Abrir Google Play para Instalar o App Meu Provedor"
                                    className="group flex items-center justify-center gap-3 rounded-md py-2 transition-colors duration-300 bg-blue-700 hover:bg-blue-500 dark:bg-cyan-400 dark:hover:bg-cyan-500 w-[8.5rem] h-[2.4375rem]"
                                  >
                                    <div className="w-5 h-5 flex items-center justify-center">
                                      <span className="sr-only">
                                        Ícone da Apple Store
                                      </span>
                                      <FaGooglePlay
                                        size={20}
                                        className="text-white dark:text-zinc-800"
                                      />
                                    </div>
                                    <div className="m-0 flex flex-col">
                                      <p className="text-[0.6rem] leading-[0.7rem] text-white dark:text-zinc-800 font-medium">
                                        Download Via
                                      </p>
                                      <p className="text-white text-xs leading-3 dark:text-zinc-800 font-semibold">
                                        App Store
                                      </p>
                                    </div>
                                  </a>
                                </NavigationMenu.Link>
                              </div>
                              <NavigationMenu.Link asChild>
                                <a
                                  href="https://tsmx.sgp.net.br/accounts/central/login/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="group h-12 w-[292px] flex items-center justify-center bg-center rounded-md border-2 border-blue-700 dark:border-cyan-400 hover:border-transparent hover:bg-blue-700 dark:hover:border-transparent dark:hover:bg-cyan-400 transition-colors duration-200"
                                >
                                  <p className="text-center font-medium text-base text-blue-700 group-hover:text-white dark:text-cyan-400 dark:group-hover:text-zinc-800">
                                    CENTRAL DO ASSINANTE
                                  </p>
                                </a>
                              </NavigationMenu.Link>
                            </div>
                          </div>
                        </div>
                        <Separator
                          orientation="horizontal"
                          className="shrink-0 dark:bg-white w-full h-[1px] bg-gray-200"
                        />
                        <div className="flex flex-row gap-10">
                          <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-1">
                              <h2 className="text-gray-500 font-medium text-xs leading-4 dark:text-white">
                                INTERNET FIBRA
                              </h2>
                              <Separator
                                orientation="horizontal"
                                className="shrink-0 dark:bg-white w-10 h-[2px] bg-blue-700 rounded-full"
                              />
                            </div>
                            <NavigationMenu.Link asChild>
                              <Link
                                href="/fiber"
                                className="mt-3 text-base text-gray-600 hover:text-blue-700 leading-5 dark:text-cyan-400 dark:hover:text-cyan-500 font-semibold"
                              >
                                Plano Fibra
                              </Link>
                            </NavigationMenu.Link>
                            <NavigationMenu.Link asChild>
                              <a
                                href="https://tsmx.sgp.net.br/accounts/central/login/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-base text-gray-600 hover:text-blue-700 leading-5 dark:text-cyan-400 dark:hover:text-cyan-500 font-semibold"
                              >
                                2ª Via da Fatura
                              </a>
                            </NavigationMenu.Link>
                          </div>
                          <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-1">
                              <h2 className="text-gray-500 font-medium text-xs leading-4 dark:text-white">
                                STREAMING
                              </h2>
                              <Separator
                                orientation="horizontal"
                                className="shrink-0 dark:bg-white w-10 h-[2px] bg-blue-700 rounded-full"
                              />
                            </div>
                            <NavigationMenu.Link asChild>
                              <Link
                                href="/streaming"
                                className="mt-3 text-base text-gray-600 hover:text-blue-700 leading-5 dark:text-cyan-400 dark:hover:text-cyan-500 font-semibold"
                              >
                                Plano Streaming
                              </Link>
                            </NavigationMenu.Link>
                            <NavigationMenu.Link asChild>
                              <Link
                                href="/combos"
                                className="text-base text-gray-600 hover:text-blue-700 leading-5 dark:text-cyan-400 dark:hover:text-cyan-500 font-semibold"
                              >
                                Conheça Nossos Combos
                              </Link>
                            </NavigationMenu.Link>
                          </div>
                        </div>
                      </div>
                    </main>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Indicator className="top-[90%] z-[0] flex h-4 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in">
                  <div className="relative top-full h-[26px] w-[28px] rotate-45 rounded-tl-sm bg-white shadow-md dark:bg-zinc-800" />
                </NavigationMenu.Indicator>
              </NavigationMenu.List>

              <div className="absolute right-0 top-[95%] flex justify-center">
                <NavigationMenu.Viewport className="origin-top-center text-popover-foreground relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)] border-none shadow-xl" />
              </div>
            </NavigationMenu.Root>
          </div>
        </div>
        <div className="z-0 hidden h-1 w-full 32md:block"></div>
      </div>
    </header>
  );
};

export default HeaderDesktop;
