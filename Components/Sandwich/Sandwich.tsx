"use client";
import Image from "next/image";
import React from "react";
import farm from "@/public/sandwich/1.png";
import egg from "@/public/sandwich/4.png";
import seeds from "@/public/sandwich/3.png";
import thing from "@/public/sandwich/5.png";
import sandwich from "@/public/sandwich/2.jpg";
import ready from "@/public/sandwich/6.png";

import { Raleway, Alegreya } from "@next/font/google";
import { motion } from "framer-motion";
const ra = Raleway({
  subsets: ["latin"],
});
const al = Alegreya({
  subsets: ["latin"],
});

type Props = {};

export default function Sandwich({}: Props) {
  return (
    <div className="w-full text-stone-600">
      <div
        className={`${al.className} relative mx-auto flex max-w-[2500px] select-none flex-col items-center justify-center bg-[#f3f1e9]`}
      >
        {/* top */}
        <div className="absolute top-0 right-0 left-0 mx-auto flex h-[100px] items-center justify-center text-center">
          <motion.div
            viewport={{ once: false }}
            variants={variant_farm}
            initial={"initial"}
            whileInView={"whileInView"}
            transition={{
              damping: 50,
              stiffness: 60,
              type: "spring",
            }}
          >
            <Image
              src={farm}
              alt={"small_farm"}
              width={700}
              height={700}
              className="z-20 "
            ></Image>
          </motion.div>
          <div className="absolute -bottom-10 right-0 left-0 mx-auto flex flex-col items-center justify-center">
            <motion.h1
              viewport={{ once: false }}
              variants={variants_text}
              initial={"initial"}
              whileInView={"whileInView"}
              transition={{
                damping: 10,
                stiffness: 35,
                type: "spring",
              }}
              className="mb-1 text-[2.2em] font-bold leading-none md:text-[2.8em]"
            >
              The Jibarito sandwich
            </motion.h1>
            <motion.h2
              viewport={{ once: false }}
              variants={variants_text}
              initial={"initial"}
              whileInView={"whileInView"}
              transition={{
                damping: 10,
                stiffness: 35,
                type: "spring",
                delay: 0.2,
              }}
              className="text-[.8em] font-bold uppercase tracking-wide text-tussock-500 md:text-[.9em]"
            >
              The best sandwich you've ever tasted
            </motion.h2>
          </div>
        </div>
        <div className="mt-40 grid grid-rows-[1fr_auto_auto_auto] items-center justify-center gap-x-[1em] text-center xs:mx-5 sm:mx-20 md:grid-rows-[1fr_auto] xl:mx-32 xl:grid-cols-[1fr_2fr] xl:grid-rows-none">
          {/* Left side */}
          <motion.div
            viewport={{ once: false }}
            variants={variants_left_side}
            initial={"initial"}
            whileInView={"whileInView"}
            transition={{
              damping: 10,
              stiffness: 30,
              type: "spring",
            }}
            className="mx-[2em] mt-8 flex flex-col gap-y-12 xl:mt-0"
          >
            {/* #1 */}
            <div className="flex flex-col items-center justify-center gap-y-2">
              <Image
                src={seeds}
                alt={"seeds"}
                width={230}
                height={230}
                className="h-28 w-28 rounded-full object-cover ring-4 ring-tussock-500 drop-shadow-xl"
              />
              <p className={`text-[1.9em] font-bold text-tussock-600`}>
                Lorem ipsum
              </p>
              <p
                className={` max-w-xs text-[.9em] font-semibold tracking-wide ${ra.className}`}
              >
                Lorem, Quo aspernatur ipsum. Ut, veritatis deleniti.
              </p>
            </div>

            {/* #2 */}
            <div className="flex flex-col items-center justify-center gap-y-2">
              <Image
                src={egg}
                alt={"eggs"}
                width={230}
                height={230}
                className="h-28 w-28 rounded-full object-cover ring-4 ring-tussock-500 drop-shadow-xl"
              />
              <p className={`text-[1.9em] font-bold text-tussock-600`}>
                Lorem ipsum
              </p>
              <p
                className={`max-w-xs text-[.9em] font-semibold tracking-wide ${ra.className}`}
              >
                Lorem, Quo aspernatur ipsum. Ut, veritatis deleniti.
              </p>
            </div>

            {/* #3 */}
            <div className="flex flex-col items-center justify-center gap-y-2">
              <Image
                src={thing}
                alt={"thing"}
                width={230}
                height={230}
                className="h-28 w-28 rounded-full object-cover ring-4 ring-tussock-500 drop-shadow-xl"
              />
              <p className={`text-[1.9em] font-bold text-tussock-600`}>
                Lorem ipsum
              </p>
              <p
                className={`max-w-xs text-[.9em] font-semibold tracking-wide ${ra.className}`}
              >
                Lorem, Quo aspernatur ipsum. Ut, veritatis deleniti.
              </p>
            </div>
          </motion.div>

          {/* details in mobile */}
          <motion.div
            viewport={{ once: false }}
            variants={variants_right_side}
            initial={"initial"}
            whileInView={"whileInView"}
            transition={{
              damping: 10,
              stiffness: 30,
              type: "spring",
            }}
            className="z-20 mb-1 mt-12 flex w-full flex-row items-center justify-center gap-x-[5px] gap-y-[2px] text-sm md:hidden"
          >
            {/* 1st */}
            <div className="relative flex aspect-square w-1/3 flex-col items-center justify-around bg-white/80 py-4 backdrop-blur-[2px] sm:py-12">
              <p
                className={`${al.className} z-10 text-[1.2em] font-bold uppercase leading-[.13em] tracking-wide text-tussock-500 sm:text-[1.2em]`}
              >
                Prep
              </p>
              <p
                className={`${al.className} z-10 text-[3em] font-bold uppercase leading-tight tracking-wide text-stone-600 sm:text-[4em]`}
              >
                8
              </p>
              <p
                className={`${al.className} z-10 text-[.9em] font-bold leading-[.116em] tracking-wide text-zinc-500 sm:text-[1.1em]`}
              >
                mins
              </p>
            </div>
            {/* 2nd */}
            <div className="relative flex aspect-square w-1/3 flex-col items-center justify-around bg-white/80 py-4 backdrop-blur-[2px] sm:py-12">
              <p
                className={`${al.className} z-10 text-[1.2em] font-bold uppercase leading-[.13em] tracking-wide text-tussock-500 sm:text-[1.2em]`}
              >
                Cook
              </p>
              <p
                className={`${al.className} z-10 text-[3em] font-bold uppercase leading-tight tracking-wide text-stone-600 sm:text-[4em]`}
              >
                15
              </p>
              <p
                className={`${al.className} z-10 text-[.9em] font-bold leading-[.116em] tracking-wide text-zinc-500 sm:text-[1.1em]`}
              >
                mins
              </p>
            </div>
            {/* ready in  */}
            <div className="relative flex aspect-square w-1/3 flex-col items-center justify-around py-4 sm:py-12">
              <Image src={ready} alt={"farm_background"} fill className={""} />
              <p
                className={`${al.className} z-10 text-[1.2em] font-bold uppercase leading-[.13em] tracking-wide text-tussock-500 sm:text-[1.2em]`}
              >
                ready in
              </p>
              <p
                className={`${al.className} z-10 text-[3em] font-bold uppercase leading-tight tracking-wide text-tussock-300 sm:text-[4em]`}
              >
                23
              </p>
              <p
                className={`${al.className} z-10 text-[.9em] font-bold leading-[.116em] tracking-wide text-zinc-500 sm:text-[1.1em]`}
              >
                mins
              </p>
            </div>
          </motion.div>

          {/* right side */}
          <motion.div
            viewport={{ once: false }}
            variants={variants_right_side}
            initial={"initial"}
            whileInView={"whileInView"}
            transition={{
              damping: 10,
              stiffness: 30,
              type: "spring",
            }}
            className="relative flex h-full w-full max-w-[1200px] flex-col items-center justify-center md:py-[2em] xl:py-[6em] xl:pl-12"
          >
            <Image
              src={sandwich}
              alt={"sandwich"}
              width={2000}
              height={2000}
              className={"border-4 border-white object-cover sm:border-8"}
            ></Image>
            {/* button */}
            <button className="absolute bottom-0 -left-5 hidden max-w-[11em] cursor-pointer items-center justify-center truncate border-2 border-dashed border-tussock-300 bg-white py-[1em] px-[1.8em] text-[1em] font-bold uppercase tracking-widest text-tussock-300 lg:flex lg:text-[1.4em] xl:left-0 xl:bottom-20">
              Full recipe
            </button>

            {/* details */}
            <div className="absolute left-0 right-0 bottom-0 z-20 mx-auto my-auto hidden flex-row items-center justify-center gap-x-[5px] gap-y-[2px] text-sm md:flex lg:right-2 lg:left-auto lg:top-0 lg:flex-col lg:text-lg 4xl:text-xl">
              {/* 1st */}
              <div className="sand relative flex flex-col items-center justify-around bg-white/80 py-12 backdrop-blur-[2px]">
                <p
                  className={`${al.className} z-10 text-[1.2em] font-bold uppercase leading-[.13em] tracking-wide text-tussock-500`}
                >
                  Prep
                </p>
                <p
                  className={`${al.className} z-10 text-[4em] font-bold uppercase leading-tight tracking-wide text-stone-600`}
                >
                  8
                </p>
                <p
                  className={`${al.className} z-10 text-[1.1em] font-bold leading-[.116em] tracking-wide text-zinc-500`}
                >
                  mins
                </p>
              </div>
              {/* 2nd */}
              <div className="sand relative flex flex-col items-center justify-around bg-white/80 py-12 backdrop-blur-[2px]">
                <p
                  className={`${al.className} z-10 text-[1.2em] font-bold uppercase leading-[.13em] tracking-wide text-tussock-500`}
                >
                  Cook
                </p>
                <p
                  className={`${al.className} z-10 text-[4em] font-bold uppercase leading-tight tracking-wide text-stone-600`}
                >
                  15
                </p>
                <p
                  className={`${al.className} z-10 text-[1.1em] font-bold leading-[.116em] tracking-wide text-zinc-500`}
                >
                  mins
                </p>
              </div>
              {/* ready in  */}
              <div className="sand relative flex flex-col items-center justify-around py-12">
                <Image
                  src={ready}
                  alt={"farm_background"}
                  fill
                  className={""}
                />
                <p
                  className={`${al.className} z-10 text-[1.2em] font-bold uppercase leading-[.13em] tracking-wide text-tussock-500`}
                >
                  ready in
                </p>
                <p
                  className={`${al.className} z-10 text-[4.8em] font-bold uppercase leading-tight tracking-wide text-tussock-300`}
                >
                  23
                </p>
                <p
                  className={`${al.className} z-10 text-[1.1em] font-bold leading-[.116em] tracking-wide text-zinc-500`}
                >
                  mins
                </p>
              </div>
            </div>
          </motion.div>

          {/* button in mobile */}
          <motion.button
            viewport={{ once: true }}
            variants={variant_button}
            initial={"initial"}
            whileInView={"whileInView"}
            transition={{
              damping: 10,
              stiffness: 30,
              type: "spring",
            }}
            className="mt-2 flex w-full cursor-pointer items-center justify-center truncate border-2 border-dashed border-tussock-500 bg-tussock-300 py-[1em] px-[1.8em] text-[1em] font-bold uppercase tracking-widest text-tussock-600 lg:hidden lg:text-[1.4em] xl:left-0 xl:bottom-20"
          >
            Full recipe
          </motion.button>
        </div>
      </div>
    </div>
  );
}

//animation variants
const variant_farm = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
};
const variant_button = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
};
const variants_text = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
};

const variants_left_side = {
  initial: { x: -200, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
};

const variants_right_side = {
  initial: { x: 200, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
};
