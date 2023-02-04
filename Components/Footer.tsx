"use client";
import React from "react";
import { Alegreya, Dancing_Script } from "@next/font/google";
import logo from "@/public/logo/logo3.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const al = Alegreya({
  subsets: ["latin"],
});
const dance = Dancing_Script({
  subsets: ["latin"],
});

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="mx-auto flex max-w-[2500px] flex-col justify-center">
      <div
        className={`${al.className} mx-5 flex min-h-[64px] flex-col items-center gap-y-[1.3em] truncate text-stone-700 sm:mx-20 md:gap-y-[2em] xl:mx-32 xl:flex-row xl:gap-y-0`}
      >
        <motion.div
          variants={variants_from_left}
          initial={"initial"}
          whileInView={"whileInView"}
          transition={{ damping: 30, stiffness: 50, type: "spring" }}
          className="flex w-full flex-row items-center justify-around border-t-[2px] border-zinc-600/40 py-6 px-5 text-[.9em] font-medium uppercase tracking-widest md:text-[1.1em] xl:border-y-[2px]"
        >
          <Link href={"#"} className="">
            Our menu
          </Link>
          <p>~</p>
          <Link href={"#"} className="">
            Gallery
          </Link>
          <p>~</p>
          <Link href={"#"} className="">
            Culture
          </Link>
        </motion.div>
        <motion.div
          variants={variants_logo}
          initial={"initial"}
          whileInView={"whileInView"}
          transition={{ damping: 30, stiffness: 50, type: "spring" }}
          className={"mx-[3.1em]"}
        >
          <Image
            src={logo}
            alt={""}
            width={230}
            height={230}
            className=" h-[3em] object-contain opacity-90"
          />
        </motion.div>
        <motion.div
          variants={variants_from_right}
          initial={"initial"}
          whileInView={"whileInView"}
          transition={{ damping: 30, stiffness: 50, type: "spring" }}
          className="flex w-full flex-row items-center justify-around border-b-[2px] border-zinc-600/40 py-6 px-5 text-[.9em] font-medium uppercase tracking-widest md:text-[1.1em] xl:border-y-[2px]"
        >
          <Link href={"#"} className="">
            Events
          </Link>
          <p>~</p>
          <Link href={"#"} className="">
            catering
          </Link>
          <p>~</p>
          <Link href={"#"} className="">
            visit us
          </Link>
        </motion.div>
      </div>
      <p className={`${al.className} mx-auto my-4 text-lg text-stone-500`}>
        @Copyright 2023 -{" "}
        <span className={`${dance.className} text-tussock-600`}>
          Nacereddine_Rebouh
        </span>
      </p>
    </div>
  );
}

//animation variants

const variants_from_left = {
  initial: { x: -200, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
};

const variants_from_right = {
  initial: { x: 200, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
};

const variants_logo = {
  initial: { scale: 0.6, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
};
