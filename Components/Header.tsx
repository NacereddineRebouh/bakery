"use client";
import { Menu, Transition } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import logo from "@/public/logo/logo4.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";

//font
import { Alegreya } from "@next/font/google";
const al = Alegreya({
  subsets: ["latin"],
});

type Props = {};
const variants = {
  open: { innerHeight: "0" },
  closed: { innerHeight: "-100%" },
};

export default function Header({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`w-screen select-none text-zinc-100 transition-all duration-300 ${
        isOpen ? "bg-stone-800/70 xl:bg-stone-800/30" : "bg-stone-800/30"
      }`}
    >
      <Menu as="div" className="mx-auto flex max-w-[2500px] flex-col">
        <div className="mx-5 flex h-20 min-h-[48px] items-center justify-between sm:mx-20 xl:mx-32">
          {/* logo & navigation*/}

          <Link
            href="/"
            className="relative flex w-24 cursor-pointer justify-start"
            title="innovativeInteriors_logo"
          >
            <Image src={logo} alt={""} className="h-10 object-contain" />
          </Link>

          {/* navigation */}
          <nav
            className={`${al.className} hidden items-center  gap-x-5 text-sm tracking-[.2rem] text-stone-50 xl:flex 2xl:gap-x-6`}
          >
            <Link
              className="hidden flex-auto items-center truncate rounded-2xl py-3 px-4 uppercase transition-all duration-300 hover:text-stone-200 sm:flex"
              href="#"
            >
              Welcome
            </Link>
            <p>~</p>
            <Link
              className="hidden flex-auto items-center truncate rounded-2xl py-3 px-4 uppercase transition-all duration-300 hover:text-stone-200 sm:flex"
              href="#"
            >
              menu
            </Link>
            <p>~</p>
            <Link
              className="hidden flex-auto items-center truncate rounded-2xl py-3 px-4 uppercase transition-all duration-300 hover:text-stone-200 sm:flex"
              href="#"
            >
              reservations
            </Link>
            <p>~</p>
            <Link
              className="hidden flex-auto items-center truncate rounded-2xl py-3 px-4 uppercase transition-all duration-300 hover:text-stone-200 sm:flex"
              href="#Explore"
            >
              news
            </Link>
            <p>~</p>
            <Link
              className="hidden flex-auto items-center truncate rounded-2xl py-3 px-4 uppercase transition-all duration-300 hover:text-stone-200 sm:flex"
              href="#"
            >
              contact
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden items-center justify-center gap-x-8 xl:flex">
            <FaTwitter className="h-5 w-5 cursor-pointer text-stone-50" />
            <FaFacebookF className="h-5 w-5 cursor-pointer text-stone-50" />
            <RxInstagramLogo className="h-5 w-5 cursor-pointer text-stone-50" />
          </div>
          <Menu.Button
            onClick={() => setIsOpen((isOpen) => !isOpen)}
            className="flex xl:hidden"
            aria-label="openNavigation"
          >
            {({ open }) => (
              <div
                className={`flex cursor-pointer transition-all duration-200 ${
                  open ? "bg-stone-500" : "bg-transparent"
                } select-none p-2 text-sm font-medium text-zinc-900 active:scale-95`}
              >
                <HiOutlineMenuAlt3
                  className={`h-7 w-7 ${
                    open ? "text-stone-50 " : "text-zinc-100"
                  }`}
                />
              </div>
            )}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="transform opacity-0 "
          enterTo="transform opacity-100 "
          leave="transition ease-in duration-300"
          leaveFrom="transform opacity-100 "
          leaveTo="transform opacity-0 "
        >
          <Menu.Items className="mx-5 text-sm text-gray-500 sm:mx-20 xl:mx-32">
            {({ open }) => (
              <div className="flex overflow-hidden xl:hidden">
                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{
                        height: 0,
                      }}
                      animate={{
                        height: "auto",
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      exit={{
                        height: 0,
                      }}
                      className={`${al.className} flex w-full flex-col gap-y-2 `}
                    >
                      <nav className="w-full divide-y divide-stone-500 py-2 text-stone-50">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href={"/"}
                              className={`w-full ${
                                active ? "cursor-pointer" : ""
                              } group flex w-full flex-auto items-center truncate px-4 py-[16px] text-sm uppercase transition-all duration-300 hover:text-stone-100 xl:hidden`}
                            >
                              Welcome
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href={"/"}
                              className={`w-full ${
                                active ? "cursor-pointer" : ""
                              } group flex w-full flex-auto items-center truncate px-4 py-[16px] text-sm uppercase transition-all duration-300 hover:text-stone-100 xl:hidden`}
                            >
                              Menu
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href={"/"}
                              className={`w-full ${
                                active ? "cursor-pointer" : ""
                              } group flex w-full flex-auto items-center truncate px-4 py-[16px] text-sm uppercase transition-all duration-300 hover:text-stone-100 xl:hidden`}
                            >
                              Reservations
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href={"/"}
                              className={`w-full ${
                                active ? "cursor-pointer" : ""
                              } group flex w-full flex-auto items-center truncate px-4 py-[16px] text-sm uppercase transition-all duration-300 hover:text-stone-100 xl:hidden`}
                            >
                              News
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href={"/"}
                              className={`w-full ${
                                active ? "cursor-pointer" : ""
                              } group flex w-full flex-auto items-center truncate px-4 py-[16px] text-sm uppercase transition-all duration-300 hover:text-stone-100 xl:hidden`}
                            >
                              Contact
                            </Link>
                          )}
                        </Menu.Item>
                      </nav>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
