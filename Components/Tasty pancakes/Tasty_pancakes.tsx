"use client";
import React, { useState } from "react";
import background from "@/public/tasty pancakes/4.jpg";
import grape from "@/public/tasty pancakes/6.webp";
import croissant from "@/public/tasty pancakes/7.jpg";
import letter from "@/public/tasty pancakes/5.2.png";
import letter_mobile from "@/public/tasty pancakes/5.3.1.png";
import menu from "@/public/tasty pancakes/menu.png";
import ready from "@/public/tasty pancakes/1.png";
import pancake from "@/public/tasty pancakes/10.jpg";
import Image, { StaticImageData } from "next/image";
import { Alegreya } from "@next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import { BsChevronDoubleRight } from "react-icons/bs";

import pastery from "@/public/Breakfast/9.png";
import outline from "@/public/Breakfast/10.png";

const al = Alegreya({
  subsets: ["latin"],
});

import { Playfair_Display } from "@next/font/google";
const play = Playfair_Display({
  subsets: ["latin"],
});

import { Dancing_Script } from "@next/font/google";
const dance = Dancing_Script({
  subsets: ["latin"],
});

import { Raleway } from "@next/font/google";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
const ra = Raleway({
  subsets: ["latin"],
});

type Props = {};
type stuff = {
  image: StaticImageData;
  header_title: string;
  subheader: string;
  gold: string;
  before: string;
  after: string;
  duree: number;
};

export default function Tasty_pancakes({}: Props) {
  const p: stuff = {
    image: pancake,
    header_title: "Tasty pancakes",
    subheader: "Season's favourite",
    gold: "season's favourite",
    before: "Taste our",
    after:
      "fluffy pancakes made with quality ingredients. Enjoy a satisfying breakfast with our sweet and savory options.",
    duree: 40,
  };
  const p2: stuff = {
    image: grape,
    header_title: "Grapefruit Tart",
    subheader: "bestselling",
    before: "Indulge in the tropical flavors of our",
    gold: "bestselling",
    after:
      "Grapefruit Coconut Tart with Meringue. A crisp pastry crust filled with a creamy grapefruit and coconut filling, topped with a fluffy meringue and toasted to perfection. Perfect for a sweet and tangy treat!",
    duree: 55,
  };
  const p3: stuff = {
    image: croissant,
    header_title: "Croissant",
    subheader: "Popular",
    before: "Savor the flaky layers and buttery richness of our",
    gold: "most Popular",
    after:
      "croissant. Made with only the finest ingredients and crafted using traditional French methods, this pastry is a true crowd-pleaser. Perfect for breakfast, lunch, or as a snack any time of day.",
    duree: 15,
  };
  const [current, setcurrent] = useState<number>(0);
  const list: stuff[] = [p, p2, p3];
  const [selected, setselected] = useState<stuff>(list[0]);
  const [ExitComplete, setExitComplete] = useState<boolean>(true);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  const Vitem = {
    hidden: { x: 0, opacity: 0 },
    show: { x: 0, opacity: 1 },
    exit: {
      x: 50,
      opacity: 0,
    },
  };

  const Vitem2 = {
    hidden: { x: 0, opacity: 0 },
    show: { x: 0, opacity: 1 },
    exit: {
      opacity: 0,
    },
  };

  return (
    <div className="w-full">
      <div className="relative mx-auto flex min-h-[950px] w-full max-w-[2500px] flex-col items-center justify-center">
        {/* sticker */}
        <div className="absolute top-0 mx-auto flex h-2 w-full items-center justify-center bg-stone-50">
          <div className="absolute -top-12 right-0 left-0 mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-stone-50">
            <motion.div
              variants={variants_bread}
              initial={"initial"}
              whileInView={"whileInView"}
              transition={{ damping: 10, stiffness: 30, type: "spring" }}
            >
              <Image
                src={pastery}
                alt={""}
                width={50}
                height={50}
                className="z-10 w-16"
              ></Image>
            </motion.div>
          </div>

          <motion.div
            variants={variants_outline}
            initial={"initial"}
            whileInView={"whileInView"}
            transition={{ damping: 30, stiffness: 50, type: "spring" }}
            className="absolute -top-16 right-0 left-0 mx-auto flex h-32 w-32 items-center justify-center rounded-full"
          >
            <Image
              src={outline}
              alt={""}
              width={100}
              height={100}
              className="z-10 w-32 opacity-70"
            ></Image>
          </motion.div>
        </div>

        {/* background */}
        <Image
          src={background}
          alt={""}
          fill
          quality={100}
          className={"background -z-10 h-full object-cover object-top"}
        ></Image>
        {/* Desktop and tablets */}
        <motion.div
          viewport={{ once: true }}
          variants={variant}
          initial={"initial"}
          whileInView={"visible"}
          transition={{
            damping: 10,
            stiffness: 30,
            type: "spring",
          }}
          className="tasty relative my-20 mx-[7rem] hidden h-[700px] max-w-[1420px] grid-cols-[0.95fr_1.05fr] flex-col items-center lg:grid xl:grid-cols-2 "
        >
          {/* ready in  */}
          <motion.div
            viewport={{ once: true }}
            variants={variant_ready}
            initial={"initial"}
            whileInView={"visible"}
            transition={{
              damping: 10,
              stiffness: 30,
              type: "spring",
            }}
            className="absolute -right-32 -top-10 flex h-[1em] w-[1em] flex-col items-center justify-center gap-y-3 drop-shadow-2xl"
          >
            <Image src={ready} alt={""} fill className={""} />
            <p
              className={`${al.className} z-10 text-[.1em] font-bold uppercase leading-[.13em] tracking-wide text-tussock-500`}
            >
              ready in
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              key={selected.duree}
              className={`${al.className} z-10 text-8xl text-[.4em] font-bold uppercase leading-tight tracking-wide text-tussock-300`}
            >
              {selected.duree}
            </motion.p>
            <p
              className={`${al.className} z-10 text-lg text-[0.075em] font-bold leading-[.116em] tracking-wide text-tussock-500`}
            >
              mins
            </p>
          </motion.div>
          {/* left side */}
          <div className="relative -z-10 overflow-hidden">
            <AnimatePresence mode="wait">
              {list.map((item: stuff, i: number) => {
                return (
                  item.image.src === selected.image.src && (
                    <motion.figure
                      key={i}
                      initial={{ x: -200, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 200, opacity: 0 }}
                      transition={{ ease: "easeOut", duration: 0.4 }}
                    >
                      <Image
                        src={item.image}
                        alt={""}
                        width={2000}
                        height={2000}
                        className="col-start-1 h-[700px] self-start object-cover"
                      />
                    </motion.figure>
                  )
                );
              })}
            </AnimatePresence>
          </div>

          <Image
            src={letter}
            alt={""}
            fill
            className={"background -z-10 h-[700px] object-cover drop-shadow-lg"}
          />

          {/* right side */}
          <div className="flex h-full max-h-[800px] flex-col overflow-hidden">
            <AnimatePresence
              mode="wait"
              onExitComplete={() => {
                setExitComplete(true);
              }}
            >
              {list.map((item: stuff, i: number) => {
                return item.header_title === selected.header_title ? (
                  <motion.div
                    layout
                    key={item.header_title}
                    variants={container}
                    initial={"hidden"}
                    animate={"show"}
                    exit={"exit"}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.4,
                      staggerChildren: 0.15,
                    }}
                    className={`${al.className} art-head col-start-1 my-16 flex h-full w-full flex-col items-start justify-center gap-y-[2.8em] text-start text-stone-700 `}
                  >
                    {/* title */}
                    <div className="flex flex-col items-start justify-start gap-y-[.1em] text-start">
                      <motion.h1
                        className={`text-[2.3em] font-bold leading-none 2xl:text-[5rem]`}
                        variants={Vitem}
                        onLoad={() => {
                          console.log("Loading...");
                        }}
                        transition={{
                          ease: "easeInOut",
                          duration: 0.5,
                        }}
                      >
                        {item.header_title}
                      </motion.h1>
                      <motion.h2
                        variants={Vitem}
                        transition={{
                          ease: "easeInOut",
                          duration: 0.5,
                        }}
                        className="text-[.7em] font-bold uppercase tracking-wide text-tussock-500"
                      >
                        {item.subheader}
                      </motion.h2>
                    </div>
                    {/* description */}
                    <motion.div
                      layout
                      variants={Vitem}
                      transition={{
                        ease: "easeInOut",
                        duration: 0.5,
                      }}
                      className={`desription max-w-[600px] text-[.6em] font-medium tracking-normal ${ra.className}`}
                    >
                      <div>
                        {item.before}{" "}
                        <span
                          className={`${dance.className} px-1 text-[1.4em] text-tussock-500`}
                        >
                          {item.gold}
                        </span>{" "}
                        {item.after}
                      </div>
                    </motion.div>
                  </motion.div>
                ) : null;
              })}
            </AnimatePresence>

            <div className="mb-10 flex select-none items-center justify-start gap-x-6">
              <button
                className={`${dance.className} transtion-all flex items-center justify-center bg-tussock-100 px-16 py-4 text-3xl text-tussock-500 duration-200 hover:bg-tussock-200`}
                disabled={!ExitComplete}
                onClick={(e) => {
                  setExitComplete(false);
                  console.log("current: " + current);
                  if (current >= 2) {
                    setselected(list[0]);
                    console.log("to: ", 0);
                    setcurrent(0);
                  } else {
                    setselected(list[current + 1]);
                    console.log("then: ", current + 1);
                    setcurrent(current + 1);
                  }
                }}
              >
                <BsChevronDoubleRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Mobiles */}
        <motion.div
          layout
          viewport={{ once: true }}
          variants={variant}
          initial={"initial"}
          whileInView={"visible"}
          transition={{
            damping: 10,
            stiffness: 30,
            type: "spring",
          }}
          className="tasty relative my-20 mx-2 mb-28 grid max-h-[1000px] max-w-[1420px] grid-rows-2 flex-col items-center transition-shadow duration-200 xs:mx-[.2em] sm:mx-[.4em] lg:hidden"
        >
          {/* Top*/}
          <div className="relative z-10 row-start-1 flex h-full flex-col justify-around p-[.15em] drop-shadow-2xl ">
            <Image
              src={letter_mobile}
              alt={""}
              fill
              className={"background -z-10 object-cover drop-shadow-lg"}
            />
            <AnimatePresence
              mode="wait"
              onExitComplete={() => {
                setExitComplete(true);
              }}
            >
              {list.map((item: stuff, i: number) => {
                return item.header_title === selected.header_title ? (
                  <motion.div
                    layout
                    key={item.header_title}
                    variants={container}
                    initial={"hidden"}
                    animate={"show"}
                    exit={"exit"}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.4,
                      staggerChildren: 0.15,
                    }}
                    className={`${al.className} art-head col-start-1 flex h-full w-full flex-col items-start justify-center gap-y-[2em] text-start text-stone-700 `}
                  >
                    {/* title */}
                    <div className="flex flex-col items-start justify-start gap-y-[.1em] text-start">
                      <motion.h1
                        className={`text-[2.2em] font-bold leading-none 2xl:text-[5rem]`}
                        variants={Vitem}
                        onLoad={() => {
                          console.log("Loading...");
                        }}
                        transition={{
                          ease: "easeInOut",
                          duration: 0.5,
                        }}
                      >
                        {item.header_title}
                      </motion.h1>
                      <motion.h2
                        variants={Vitem}
                        transition={{
                          ease: "easeInOut",
                          duration: 0.5,
                        }}
                        className="text-[.7em] font-bold uppercase tracking-wide text-tussock-500"
                      >
                        {item.subheader}
                      </motion.h2>
                    </div>
                    {/* description */}
                    <motion.div
                      layout
                      variants={Vitem}
                      transition={{
                        ease: "easeInOut",
                        duration: 0.5,
                      }}
                      className={`desription max-w-[600px] text-[.6em] font-medium tracking-normal ${ra.className}`}
                    >
                      <div>
                        {item.before}{" "}
                        <span
                          className={`${dance.className} px-1 text-[1.4em] text-tussock-500`}
                        >
                          {item.gold}
                        </span>{" "}
                        {item.after}
                      </div>
                    </motion.div>

                    {/* Cook duree (ready in)*/}

                    <motion.p
                      variants={Vitem2}
                      transition={{
                        ease: "easeInOut",
                        duration: 0.5,
                      }}
                      className="flex items-center justify-center gap-x-1 text-[.9em] font-bold uppercase tracking-wide"
                    >
                      Ready In
                      <span className=" text-[2.5em] text-tussock-400">
                        {selected.duree}
                      </span>
                      minutes
                    </motion.p>
                  </motion.div>
                ) : null;
              })}
            </AnimatePresence>

            <div className="flex h-36 select-none items-center justify-start gap-x-6">
              <button
                className={`${dance.className} transtion-all flex items-center justify-center bg-tussock-100 px-16 py-4 text-3xl text-tussock-500 duration-200 hover:bg-tussock-200`}
                disabled={!ExitComplete}
                onClick={(e) => {
                  setExitComplete(false);
                  console.log("current: " + current);
                  if (current >= 2) {
                    setselected(list[0]);
                    console.log("to: ", 0);
                    setcurrent(0);
                  } else {
                    setselected(list[current + 1]);
                    console.log("then: ", current + 1);
                    setcurrent(current + 1);
                  }
                }}
              >
                <BsChevronDoubleRight className="h-6 w-6" />
              </button>
            </div>

            {/* menu */}
            <div className="absolute -bottom-7 right-0 left-0 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white">
              <Image src={menu} alt={""} className="h-5 w-3 rotate-90" />
            </div>
          </div>

          {/* Bottom */}
          <div className="relative -z-10 row-start-2 h-full overflow-hidden">
            <AnimatePresence mode="wait">
              {list.map((item: stuff, i: number) => {
                return (
                  item.image.src === selected.image.src && (
                    <motion.figure
                      key={i}
                      initial={{ y: 200, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -200, opacity: 0 }}
                      transition={{ ease: "easeOut", duration: 0.4 }}
                    >
                      <Image
                        src={item.image}
                        alt={""}
                        width={2000}
                        height={2000}
                        className="col-start-1 h-full min-h-[500px] object-cover object-center"
                      />
                    </motion.figure>
                  )
                );
              })}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 200,
  damping: 50,
};

//animation
const variants_bread = {
  initial: { scale: 0.9, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
};
const variants_outline = {
  initial: { opacity: 0, scale: 0.3, rotate: -380 },
  whileInView: { opacity: 1, scale: 1, rotate: 0 },
};

const variant = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const variant_ready = {
  initial: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};
