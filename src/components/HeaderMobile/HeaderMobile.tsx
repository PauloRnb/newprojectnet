"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { Separator } from "@radix-ui/react-separator";
import {
  UserRound,
  PhoneCall,
  Mail,
  Download,
  AlignJustify,
  CircleX,
  ChevronRight,
} from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io5";
import { RiBuilding2Line } from "react-icons/ri";
import { FaGooglePlay } from "react-icons/fa";
import Link from "next/link";

export function HeaderMobile() {
  return (
    <header className="z-10 flex min-w-[375px] bg-gray-100 flex-col items-center dark:bg-zinc-900 32md:hidden">
      <div className="flex w-full flex-col">
        <nav className="w-full h-[3.75rem] flex items-center justify-between bg-gray-100 px-5 dark:bg-zinc-900 md:px-6">
          <Link href="/">
            <span className="sr-only">
              Link Para Redirecionar Para a Tela Inicial do Site
            </span>
            LOGO
          </Link>
          <div className="flex items-center">
            {/* MENU PRINCIAPAL */}
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button
                  aria-label="Abri Menu"
                  className="32md:hidden text-gray-600 hover:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 focus:outline-none focus-visible:text-blue-700 transition-colors duration-200"
                >
                  <AlignJustify size={24} />
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 backdrop-blur-sm data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut transition-opacity duration-300 ease-in-out" />
                <Dialog.Content
                  style={{ willChange: "transform, opacity" }}
                  className="fixed z-50 shadow-lg data-[state=open]:animate-enterFromRight data-[state=closed]:animate-exitToRight transition-all duration-500 ease-in-out inset-y-0 right-0 h-full sm:max-w-sm md:max-w-[613px]  w-full overflow-y-auto bg-white dark:bg-zinc-800 border-l"
                >
                  <Dialog.Title asChild>
                    <h2 className="text-lg font-semibold sticky top-0 z-[2] h-16 w-full bg-blue-700 dark:bg-zinc-900 md:flex">
                      {/* MENU RESIDENCIAL */}
                      <Dialog.Root>
                        <Dialog.Trigger asChild>
                          <button
                            aria-label="Abri Menu"
                            className="cursor-pointer flex items-center justify-center gap-2 text-lg md:text-xl px-6 py-[1.375rem] font-semibold leading-5 text-white hover:text-gray-200 transition-colors duration-200 focus:outline-none focus-visible:text-gray-200"
                          >
                            <h2>Residencial</h2>
                            <span className="sr-only">
                              Ícone de Seta Apontada Para a Direita
                            </span>
                            <ChevronRight size={20} strokeWidth={2.5} />
                          </button>
                        </Dialog.Trigger>
                        <Dialog.Portal>
                          <Dialog.Overlay className="fixed inset-0 z-50 backdrop-blur-sm data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut transition-opacity duration-300 ease-in-out" />

                          <Dialog.Content
                            style={{ willChange: "transform, opacity" }}
                            className="fixed z-50 shadow-lg data-[state=open]:animate-enterFromRight data-[state=closed]:animate-exitToRight transition-all duration-500 ease-in-out inset-y-0 right-0 sm:max-w-sm md:max-w-[613px] w-full h-[20.75rem] overflow-y-auto bg-white dark:bg-zinc-800 border-l"
                          >
                            <Dialog.Title asChild>
                              <h2 className="text-lg font-semibold sticky top-0 z-[2] h-16 w-full bg-blue-700 dark:bg-zinc-900 md:flex ">
                                <span className="select-none w-fit flex items-center gap-2 text-lg md:text-xl py-[1.375rem] px-6 font-semibold leading-5 text-white">
                                  PARA A SUA RESIDÊNCIA
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
                            <main className="flex flex-col px-6 py-8">
                              <Link
                                href="/residential"
                                className="cursor-pointer w-fit flex items-center justify-between gap-2 text-lg md:text-xl font-semibold leading-5 text-gray-600 hover:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 transition-colors duration-200 focus:outline-none focus-visible:text-blue-700"
                              >
                                Iternet Residencial
                              </Link>
                              <Separator
                                orientation="horizontal"
                                className="shrink-0 dark:bg-white w-full h-[1px] bg-gray-300 my-6"
                              />
                              <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-1">
                                  <h2 className="text-blue-700 text-base font-semibold dark:text-white">
                                    Para Sua Empresa
                                  </h2>
                                  <Separator
                                    orientation="horizontal"
                                    className="shrink-0 dark:bg-white w-10 rounded-full h-[2px] bg-blue-700"
                                  />
                                </div>
                                <Link
                                  href="/companies"
                                  className="cursor-pointer w-fit flex items-center justify-between gap-2 text-lg md:text-xl font-semibold leading-5 text-gray-600 hover:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 transition-colors duration-200 focus:outline-none focus-visible:text-blue-700"
                                >
                                  Do Pequeno ao Grande Negócio
                                </Link>
                              </div>
                            </main>
                          </Dialog.Content>
                        </Dialog.Portal>
                      </Dialog.Root>
                      <Dialog.Close asChild>
                        <button
                          aria-label="Fechar Menu"
                          className="data-[state=open]:bg-white absolute right-[1.5rem] top-[1.063rem] rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none focus-visible:opacity-100"
                        >
                          <CircleX size={28} className="text-white" />
                        </button>
                      </Dialog.Close>
                    </h2>
                  </Dialog.Title>
                  <div className="flex items-center px-6 py-5 h-24">
                    <Link
                      href="/indicate"
                      className="text-base font-normal text-gray-600 hover:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 transition-colors duration-200 focus-visible:text-blue-700 dark:focus-visible:text-cyan-500 focus:outline-none"
                    >
                      Indique e Ganhe
                    </Link>
                  </div>
                  <div className="flex items-center gap-8 w-full h-14 bg-gray-200 dark:bg-zinc-900 px-6">
                    {/* MENU ASSINE AGORA */}
                    <Dialog.Root>
                      <Dialog.Trigger asChild>
                        <button
                          aria-label="Abri Menu"
                          className="cursor-pointer flex items-center justify-center gap-2 text-lg md:text-xl font-semibold leading-5 text-blue-700 hover:text-blue-500 dark:text-cyan-400 dark:hover:text-cyan-500 transition-colors duration-200 focus:outline-none focus-visible:text-blue-500"
                        >
                          <h2>Assine Agora</h2>
                          <span className="sr-only">
                            Ícone de Seta Apontada Para a Direita
                          </span>
                          <ChevronRight size={20} strokeWidth={2.5} />
                        </button>
                      </Dialog.Trigger>
                      <Dialog.Portal>
                        <Dialog.Overlay className="fixed inset-0 z-50 backdrop-blur-sm data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut transition-opacity duration-300 ease-in-out" />
                        <Dialog.Content
                          style={{ willChange: "transform, opacity" }}
                          className="fixed z-50 shadow-lg data-[state=open]:animate-enterFromRight data-[state=closed]:animate-exitToRight transition-all duration-500 ease-in-out inset-y-0 right-0 h-full sm:max-w-sm md:max-w-[613px] w-full overflow-y-auto bg-white dark:bg-zinc-800 border-l"
                        >
                          <Dialog.Title asChild>
                            <h2 className="text-lg font-semibold sticky top-0 z-[2] h-16 w-full bg-white dark:bg-zinc-900 md:flex ">
                              <span className="select-none w-fit flex items-center gap-2 text-lg md:text-xl p-[1.375rem] font-semibold leading-5 text-blue-700 dark:text-cyan-400">
                                ASSINE AGORA
                              </span>
                              <Dialog.Close asChild>
                                <button
                                  aria-label="Fechar Menu"
                                  className="data-[state=open]:bg-gray-600 absolute right-[1.5rem] top-[1.063rem] rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none focus-visible:opacity-100"
                                >
                                  <CircleX
                                    size={28}
                                    className="text-gray-600 dark:text-white"
                                  />
                                </button>
                              </Dialog.Close>
                            </h2>
                          </Dialog.Title>
                          <main className="px-6 py-8">
                            <div className="flex flex-col">
                              <h2 className="text-blue-700 font-medium text-base leading-5 dark:text-white select-none">
                                ASSINE AGORA POR TELEFONE OU POR EMAIL:
                              </h2>
                              <div className="flex flex-col justify-normal mt-8 gap-8">
                                <div className="flex flex-col pr-16">
                                  <div className="flex items-center justify-start gap-1 32md:gap-2">
                                    <div className="w-3 h-3 flex items-center justify-center">
                                      <span className="sr-only">
                                        Ícone de Pessoa
                                      </span>
                                      <UserRound
                                        size={12}
                                        strokeWidth={2.7}
                                        className="text-gray-500 dark:text-white"
                                      />
                                    </div>
                                    <h3 className="select-none font-semibold tracking-[0.0375rem] text-gray-500 dark:text-white text-xs">
                                      PARA VOCÊ
                                    </h3>
                                  </div>
                                  <div className="ml-4 mt-5 flex flex-col justify-between h-full">
                                    <div className="flex flex-col">
                                      <div className="mb-7 flex flex-col">
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
                                        <a
                                          href="tel:+558597362750"
                                          aria-label="Ligar Para o Número (85) 9 9736-2750"
                                          className="ml-5 text-xs font-medium text-gray-500 dark:text-gray-300"
                                        >
                                          (85) 9 9736-2750
                                        </a>
                                      </div>
                                      <div className="flex flex-col">
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
                                        <a
                                          href="https://wa.me/558597362750?text=Olá gostaria de saber mais informações sobre os planos de internet residencial."
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          aria-label="Abrir WhatsApp Com Mensagem Pré-Preenchida"
                                          className="ml-5 text-xs font-medium text-gray-500 dark:text-gray-300"
                                        >
                                          (85) 9 9736-2750
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Separator
                                  orientation="horizontal"
                                  className="shrink-0 dark:bg-white w-full h-[1px] bg-gray-300"
                                />
                                <div className="flex flex-col">
                                  <div className="flex items-center justify-start gap-1 32md:gap-2">
                                    <div className="w-3 h-3 flex items-center justify-center">
                                      <span className="sr-only">
                                        Ícone de Empresa
                                      </span>
                                      <RiBuilding2Line
                                        size={12}
                                        strokeWidth={0.8}
                                        className="text-gray-500 dark:text-white"
                                      />
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
                                        <a
                                          href="tel:+558597362750"
                                          aria-label="Ligar Para o Número (85) 9 9736-2750"
                                          className="ml-5 text-xs font-medium text-gray-500 dark:text-gray-300"
                                        >
                                          (85) 9 9736-2750
                                        </a>
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
                                        <a
                                          href="https://wa.me/558597362750?text=Olá gostaria de saber mais informações sobre os planos de internet residencial."
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          aria-label="Abrir WhatsApp Com Mensagem Pré-Preenchida"
                                          className="ml-5 text-xs font-medium text-gray-500 dark:text-gray-300"
                                        >
                                          (85) 9 9736-2750
                                        </a>
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
                                      <a
                                        href="mailto:contato@exemplo.com"
                                        className="ml-5 text-xs font-medium text-gray-500 dark:text-gray-300"
                                      >
                                        evolutionnet221@gmail.com
                                      </a>
                                    </div>
                                    <a
                                      href="https://wa.me/558597362750?text=Olá gostaria de saber mais informações sobre os planos de internet residencial."
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      aria-label="Abrir WhatsApp Com Mensagem Pré-Preenchida"
                                      className="bg-blue-700 flex items-center justify-center hover:bg-blue-500 dark:bg-cyan-400 dark:hover:bg-cyan-500 rounded-md py-2 transition-colors duration-200"
                                    >
                                      <span className="text-white dark:text-zinc-800 text-cente font-medium">
                                        ASSINE AGORA
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </main>
                        </Dialog.Content>
                      </Dialog.Portal>
                    </Dialog.Root>
                    {/* MENU ÁREA DO CLIENTE */}
                    <Dialog.Root>
                      <Dialog.Trigger asChild>
                        <button
                          aria-label="Abri Menu"
                          className="cursor-pointer flex items-center justify-center gap-2 text-lg md:text-xl font-semibold leading-5 text-blue-700 hover:text-blue-500 dark:text-cyan-400 dark:hover:text-cyan-500 transition-colors duration-200 focus:outline-none focus-visible:text-blue-500"
                        >
                          <h2>Área do Cliente</h2>
                          <span className="sr-only">
                            Ícone de Seta Apontada Para a Direita
                          </span>
                          <ChevronRight size={20} strokeWidth={2.5} />
                        </button>
                      </Dialog.Trigger>
                      <Dialog.Portal>
                        <Dialog.Overlay className="fixed inset-0 z-50 backdrop-blur-sm data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut transition-opacity duration-300 ease-in-out" />
                        <Dialog.Content
                          style={{ willChange: "transform, opacity" }}
                          className="fixed z-50 shadow-lg data-[state=open]:animate-enterFromRight data-[state=closed]:animate-exitToRight transition-all duration-500 ease-in-out inset-y-0 right-0 h-full sm:max-w-sm md:max-w-[613px] w-full overflow-y-auto bg-white dark:bg-zinc-800 border-l"
                        >
                          <Dialog.Title asChild>
                            <h2 className="text-lg font-semibold sticky top-0 z-[2] h-16 w-full bg-white dark:bg-zinc-900 md:flex">
                              <span className="select-none w-fit flex items-center gap-2 text-lg md:text-xl p-[1.375rem] font-semibold leading-5 text-blue-700 dark:text-cyan-400">
                                ÁREA DO CLIENTE
                              </span>
                              <Dialog.Close asChild>
                                <button
                                  aria-label="Fechar Menu"
                                  className="data-[state=open]:bg-gray-600 absolute right-[1.5rem] top-[1.063rem] rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none focus-visible:opacity-100"
                                >
                                  <CircleX
                                    size={28}
                                    className="text-gray-600 dark:text-white"
                                  />
                                </button>
                              </Dialog.Close>
                            </h2>
                          </Dialog.Title>
                          <main className="px-6 py-8">
                            <div className="flex flex-col">
                              <div className="flex flex-col gap gap-6">
                                <div className="flex flex-col">
                                  <h2 className="text-base font-semibold text-blue-700 dark:text-white leading-6">
                                    ACESSE NOSSA ÁREA DE CLIENTES:
                                  </h2>
                                  <div className="mt-8 flex flex-col">
                                    <p className="text-gray-500 text-sm font-medium leading-4 dark:text-gray-300 mb-7">
                                      Tenha acesso a suas faturas, informações
                                      do seu plano e muito mais.
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
                                      </div>
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
                                    </div>
                                  </div>
                                </div>
                                <Separator
                                  orientation="horizontal"
                                  className="shrink-0 dark:bg-white w-full h-[1px] bg-gray-300"
                                />
                              </div>
                            </div>
                          </main>
                          <div className="fixed bottom-0 flex w-full h-40 min-h-[10rem] items-center justify-start bg-gray-200 dark:bg-zinc-900 rounded-t-md md:rounded-t-2xl">
                            <div className="flex flex-row gap-5 px-6">
                              <div className="flex flex-col gap-3">
                                <div className="flex flex-col gap-1">
                                  <h2 className="text-blue-700 font-medium text-xs leading-4 dark:text-white">
                                    INTERNET FIBRA
                                  </h2>
                                  <Separator
                                    orientation="horizontal"
                                    className="shrink-0 dark:bg-white w-10 h-[2px] bg-blue-700 rounded-full"
                                  />
                                </div>
                                <Link
                                  href="/fiber"
                                  className="mt-3 text-base text-gray-800 hover:text-blue-700 leading-5 dark:text-cyan-400 dark:hover:text-cyan-500 font-semibold"
                                >
                                  Plano Fibra
                                </Link>
                                <a
                                  href="https://tsmx.sgp.net.br/accounts/central/login/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-base text-gray-800 hover:text-blue-700 leading-5 dark:text-cyan-400 dark:hover:text-cyan-500 font-semibold"
                                >
                                  2ª Via da Fatura
                                </a>
                              </div>
                              <div className="flex flex-col gap-3">
                                <div className="flex flex-col gap-1">
                                  <h2 className="text-blue-700 font-medium text-xs leading-4 dark:text-white">
                                    STREAMING
                                  </h2>
                                  <Separator
                                    orientation="horizontal"
                                    className="shrink-0 dark:bg-white w-10 h-[2px] bg-blue-700 rounded-full"
                                  />
                                </div>
                                <Link
                                  href="/streaming"
                                  className="mt-3 text-base text-gray-800 hover:text-blue-700 leading-5 dark:text-cyan-400 dark:hover:text-cyan-500 font-semibold"
                                >
                                  Plano Streaming
                                </Link>
                                <Link
                                  href="/combos"
                                  className="text-base text-gray-800 hover:text-blue-700 leading-5 dark:text-cyan-400 dark:hover:text-cyan-500 font-semibold"
                                >
                                  Conheça Nossos Combos
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Dialog.Content>
                      </Dialog.Portal>
                    </Dialog.Root>
                  </div>
                  <main className="flex flex-col px-5">
                    {/* MENU INTENET */}
                    <Dialog.Root>
                      <Dialog.Trigger asChild>
                        <button
                          aria-label="Abri Menu"
                          className="cursor-pointer flex items-center justify-between gap-2 text-lg md:text-xl pt-10 pb-8 font-semibold leading-5 text-gray-600 border-b border-gray-300 hover:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 transition-colors duration-200 focus:outline-none focus-visible:text-blue-500"
                        >
                          <h2>Internet</h2>
                          <span className="sr-only">
                            Ícone de Seta Apontada Para a Direita
                          </span>
                          <ChevronRight size={20} strokeWidth={2.5} />
                        </button>
                      </Dialog.Trigger>
                      <Dialog.Portal>
                        <Dialog.Overlay className="fixed inset-0 z-50 backdrop-blur-sm data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut transition-opacity duration-300 ease-in-out" />
                        <Dialog.Content
                          style={{ willChange: "transform, opacity" }}
                          className="fixed z-50 shadow-lg data-[state=open]:animate-enterFromRight data-[state=closed]:animate-exitToRight transition-all duration-500 ease-in-out inset-y-0 right-0 h-full sm:max-w-sm md:max-w-[613px] w-full overflow-y-auto bg-white dark:bg-zinc-800 border-l"
                        >
                          <Dialog.Title asChild>
                            <h2 className="text-lg font-semibold sticky top-0 z-[2] h-16 w-full bg-white dark:bg-zinc-900 md:flex ">
                              <span className="select-none w-fit flex items-center gap-2 text-lg md:text-xl p-[1.375rem] font-semibold leading-5 text-gray-600 dark:text-cyan-400">
                                INTERNET
                              </span>
                              <Dialog.Close asChild>
                                <button
                                  aria-label="Fechar Menu"
                                  className="data-[state=open]:bg-gray-600 absolute right-[1.5rem] top-[1.063rem] rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none focus-visible:opacity-100"
                                >
                                  <CircleX
                                    size={28}
                                    className="text-gray-600 dark:text-white"
                                  />
                                </button>
                              </Dialog.Close>
                            </h2>
                          </Dialog.Title>
                        </Dialog.Content>
                      </Dialog.Portal>
                    </Dialog.Root>
                    <Link
                      href="/combos"
                      className="cursor-pointer flex items-center justify-between gap-2 text-lg md:text-xl pt-10 pb-8 font-semibold leading-5 text-gray-600 border-b border-gray-300 hover:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 transition-colors duration-200 focus:outline-none focus-visible:text-blue-500"
                    >
                      Combos
                    </Link>
                    {/* MENU STREAMING */}
                    <Dialog.Root>
                      <Dialog.Trigger asChild>
                        <button
                          aria-label="Abri Menu"
                          className="cursor-pointer flex items-center justify-between gap-2 text-lg md:text-xl pt-10 pb-8 font-semibold leading-5 text-gray-600 border-b border-gray-300 hover:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 transition-colors duration-200 focus:outline-none focus-visible:text-blue-500"
                        >
                          <h2>Streaming</h2>
                          <span className="sr-only">
                            Ícone de Seta Apontada Para a Direita
                          </span>
                          <ChevronRight size={20} strokeWidth={2.5} />
                        </button>
                      </Dialog.Trigger>
                      <Dialog.Portal>
                        <Dialog.Overlay className="fixed inset-0 z-50 backdrop-blur-sm data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut transition-opacity duration-300 ease-in-out" />
                        <Dialog.Content
                          style={{ willChange: "transform, opacity" }}
                          className="fixed z-50 shadow-lg data-[state=open]:animate-enterFromRight data-[state=closed]:animate-exitToRight transition-all duration-500 ease-in-out inset-y-0 right-0 h-full sm:max-w-sm md:max-w-[613px] w-full overflow-y-auto bg-white dark:bg-zinc-800 border-l"
                        >
                          <Dialog.Title asChild>
                            <h2 className="text-lg font-semibold sticky top-0 z-[2] h-16 w-full bg-white dark:bg-zinc-900 md:flex ">
                              <span className="select-none w-fit flex items-center gap-2 text-lg md:text-xl p-[1.375rem] font-semibold leading-5 text-gray-600 dark:text-cyan-400">
                                STREAMING
                              </span>
                              <Dialog.Close asChild>
                                <button
                                  aria-label="Fechar Menu"
                                  className="data-[state=open]:bg-gray-600 absolute right-[1.5rem] top-[1.063rem] rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none focus-visible:opacity-100"
                                >
                                  <CircleX
                                    size={28}
                                    className="text-gray-600 dark:text-white"
                                  />
                                </button>
                              </Dialog.Close>
                            </h2>
                          </Dialog.Title>
                        </Dialog.Content>
                      </Dialog.Portal>
                    </Dialog.Root>
                    <Link
                      href="/combos"
                      className="cursor-pointer flex items-center justify-between gap-2 text-lg md:text-xl pt-10 pb-8 font-semibold leading-5 text-gray-600 border-b border-gray-300 hover:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-500 transition-colors duration-200 focus:outline-none focus-visible:text-blue-500"
                    >
                      Segurança
                    </Link>
                  </main>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </nav>
      </div>
    </header>
  );
}
