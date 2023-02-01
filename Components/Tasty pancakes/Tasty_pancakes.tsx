"use client";
import React, { useState } from "react";
import background from "@/public/tasty pancakes/4.jpg";
import grape from "@/public/tasty pancakes/6.webp";
import croissant from "@/public/tasty pancakes/7.jpg";
import letter from "@/public/tasty pancakes/5.2.png";
import ready from "@/public/tasty pancakes/1.png";
import pancake from "@/public/tasty pancakes/10.jpg";
import Image, { StaticImageData } from "next/image";
import { Alegreya } from "@next/font/google";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

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
  };
  const p2: stuff = {
    image: grape,
    header_title: "Grapefruit coconut Tart With Meringue",
    subheader: "bestselling",
    before: "Indulge in the tropical flavors of our",
    gold: "bestselling",
    after:
      "Grapefruit Coconut Tart with Meringue. A crisp pastry crust filled with a creamy grapefruit and coconut filling, topped with a fluffy meringue and toasted to perfection. Perfect for a sweet and tangy treat!",
  };
  const p3: stuff = {
    image: croissant,
    header_title: "Croissant",
    subheader: "Popular",
    before: "Savor the flaky layers and buttery richness of our",
    gold: "most Popular",
    after:
      "croissant. Made with only the finest ingredients and crafted using traditional French methods, this pastry is a true crowd-pleaser. Perfect for breakfast, lunch, or as a snack any time of day.",
  };
  const [current, setcurrent] = useState<number>(0);
  const list: stuff[] = [p3, p2, p];
  const [selected, setselected] = useState<stuff>(list[0]);

  return (
    <div className="w-full">
      <div className="relative mx-auto flex min-h-[950px] w-full max-w-[2500px] flex-col items-center justify-center">
        {/* background */}
        <Image
          src={background}
          alt={""}
          fill
          quality={100}
          className={"background -z-10 h-full object-cover object-top"}
        ></Image>
        <AnimateSharedLayout>
          <motion.div
            layout
            transition={{ ease: "easeInOut" }}
            className="tasty relative my-20 mx-[7rem] hidden max-h-[750px] min-h-[650px] max-w-[1420px] grid-cols-[0.95fr_1.05fr] flex-col items-center lg:grid xl:grid-cols-2 "
          >
            {/* ready in  */}
            <div className="absolute -right-32 -top-10 flex h-[1em] w-[1em] flex-col items-center justify-center gap-y-3 drop-shadow-2xl">
              <Image src={ready} alt={""} fill className={""} />
              <p
                className={`${al.className} z-10 text-[.1em] font-bold uppercase leading-[.13em] tracking-wide text-tussock-500`}
              >
                ready in
              </p>
              <p
                className={`${al.className} z-10 text-8xl text-[.4em] font-bold uppercase leading-tight tracking-wide text-tussock-300`}
              >
                40
              </p>
              <p
                className={`${al.className} z-10 text-lg text-[0.075em] font-bold leading-[.116em] tracking-wide text-tussock-500`}
              >
                mins
              </p>
            </div>
            {/* left side */}
            <div className="-z-10 overflow-hidden">
              <AnimatePresence mode="wait">
                {list.map((item: stuff, i: number) => {
                  return item.image.src === selected.image.src ? (
                    <motion.figure
                      key={i}
                      initial={{ x: -200, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 200, opacity: 0 }}
                      transition={{ ease: "easeOut", duration: 0.4 }}
                    >
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={""}
                          key={i}
                          width={2000}
                          height={2000}
                          className="col-start-1 h-full max-h-[750px] min-h-[650px] self-start object-cover"
                        />
                      ) : (
                        "😋"
                      )}
                    </motion.figure>
                  ) : null;
                })}
              </AnimatePresence>
            </div>

            <Image
              src={letter}
              alt={""}
              fill
              className={
                "background -z-10 h-full max-h-[750px] min-h-[650px] object-cover drop-shadow-lg"
              }
            />
            {/* right side */}
            <div className="grid max-h-[750px] grid-cols-1 overflow-hidden">
              <AnimatePresence mode="wait">
                {list.map((item: stuff, i: number) => {
                  return item.image.src === selected.image.src ? (
                    <motion.div
                      layout
                      key={i}
                      variants={container}
                      initial={"hidden"}
                      animate={"show"}
                      exit={"exit"}
                      transition={{
                        ease: "easeInOut",
                        duration: 0.5,
                        staggerChildren: 0.3,
                      }}
                      className={`${al.className} art-head col-start-1 flex w-full flex-col items-start justify-start gap-y-[2.8em] text-start text-stone-700`}
                    >
                      {/* title */}
                      <div className="flex flex-col items-start justify-start gap-y-[.1em] text-start">
                        <motion.h1
                          className={`text-[2.3em] font-bold leading-none`}
                          variants={Vitem}
                          onLoad={() => {
                            console.log("Loading...");
                          }}
                          transition={{
                            ease: "easeInOut",
                            duration: 0.5,
                            staggerChildren: 0.3,
                          }}
                        >
                          {item.header_title}
                        </motion.h1>
                        <motion.h2
                          variants={Vitem}
                          transition={{
                            ease: "easeInOut",
                            duration: 0.5,
                            staggerChildren: 0.3,
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
                          staggerChildren: 0.3,
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
                <motion.button
                  className="rounded-full px-10 py-4 text-xl text-tussock-400"
                  onClick={() => {
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
                  Next
                </motion.button>
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimateSharedLayout>
      </div>
    </div>
  );
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: { opacity: { delay: 0.1 } },
  },
};

const Vitem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  exit: {
    x: 100,
    opacity: 0,
  },
};

const spring = {
  type: "spring",
  stiffness: 200,
  damping: 50,
};
