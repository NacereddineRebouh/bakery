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
import { useMediaQuery } from "react-responsive";

//font
import { Alegreya } from "@next/font/google";
const al = Alegreya({
  subsets: ["latin"],
});

type Props = {};

export default function Header({}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({
    query: "(max-width: 868px)",
  });
  return (
    <div
      className={`w-screen select-none text-zinc-100 transition-all duration-300 ${
        isOpen ? "bg-stone-800/70 xl:bg-stone-800/30" : "bg-stone-800/30"
      }`}
    >
      <Menu as="div" className="mx-auto flex max-w-[2500px] flex-col">
        <div className="mx-5 flex h-20 min-h-[48px] items-center justify-between sm:mx-20 xl:mx-32">
          {/* logo & navigation*/}

          <motion.div
            viewport={{ once: true }}
            variants={isMobile ? variants_logo_mobile : variants_logo}
            initial={"initial"}
            whileInView={"whileInView"}
            transition={{
              damping: 10,
              stiffness: 30,
              type: "spring",
            }}
          >
            <Link
              href="/"
              className="relative flex w-24 cursor-pointer justify-start"
              title="innovativeInteriors_logo"
            >
              <Image
                src={logo}
                alt={"Gustoso"}
                className="h-10 object-contain"
              />
            </Link>
          </motion.div>

          {/* navigation */}
          <motion.nav
            viewport={{ once: true }}
            variants={variants_nav}
            initial={"initial"}
            whileInView={"whileInView"}
            transition={{
              damping: 10,
              stiffness: 30,
              type: "spring",
            }}
            className={`${al.className} hidden items-center gap-x-[1.3em] text-[.87em] tracking-[.2rem] text-stone-50 xl:flex `}
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
          </motion.nav>

          {/* CTA */}
          <motion.div
            viewport={{ once: true }}
            variants={variants_social}
            initial={"initial"}
            whileInView={"whileInView"}
            transition={{
              damping: 10,
              stiffness: 30,
              type: "spring",
            }}
            className="hidden items-center justify-center gap-x-8 xl:flex"
          >
            <FaTwitter
              tabIndex={0}
              className="h-5 w-5 cursor-pointer text-stone-50 outline-none transition-all duration-150 focus:scale-125 active:scale-105"
            />
            <FaFacebookF
              tabIndex={0}
              className="h-5 w-5 cursor-pointer text-stone-50 outline-none transition-all duration-150 focus:scale-125 active:scale-105"
            />
            <RxInstagramLogo
              tabIndex={0}
              className="h-5 w-5 cursor-pointer text-stone-50 outline-none transition-all duration-150 focus:scale-125 active:scale-105"
            />
          </motion.div>
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
                <AnimatePresence onExitComplete={() => setIsOpen(false)}>
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

//animations
const variants_nav = {
  initial: { scale: 0.7, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
};
const variants_logo = {
  initial: { scale: 0.2, opacity: 0, x: -120 },
  whileInView: { scale: 1, opacity: 1, x: 0 },
};
const variants_logo_mobile = {
  initial: { scale: 0.4, opacity: 0, x: -60 },
  whileInView: { scale: 1, opacity: 1, x: 0 },
};
const variants_social = {
  initial: { scale: 0.2, opacity: 0, x: 120 },
  whileInView: { scale: 1, opacity: 1, x: 0 },
};
