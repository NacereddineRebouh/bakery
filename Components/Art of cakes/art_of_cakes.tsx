"use client";
import React from "react";
import bread from "@/public/art of cakes/5.png";
import bread2 from "@/public/art of cakes/6.png";
import cover from "@/public/art of cakes/3.png";
import chef from "@/public/art of cakes/4.png";
import art from "@/public/art of cakes/1.png";
import sticker from "@/public/art of cakes/2.png";
import Image from "next/image";
import outline from "@/public/Breakfast/10.png";

import {
  Alegreya,
  Raleway,
  Dancing_Script,
  Playfair_Display,
} from "@next/font/google";
import { motion } from "framer-motion";
const al = Alegreya({
  subsets: ["latin"],
});

const play = Playfair_Display({
  subsets: ["latin"],
});

const dance = Dancing_Script({
  subsets: ["latin"],
});

const ra = Raleway({
  subsets: ["latin"],
});

type Props = {};

export default function Art_of_cakes({}: Props) {
  return (
    <div className="w-full">
      <div className="relative mx-auto flex min-h-[850px] max-w-[2500px] flex-col">
        {/* bread sticker */}
        <div className="mx-auto flex h-2 w-full items-center justify-center bg-stone-50">
          <div className="absolute -top-12 right-0 left-0 mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-stone-50">
            <motion.div
              variants={variants_bread}
              initial={"initial"}
              whileInView={"whileInView"}
              transition={{ damping: 10, stiffness: 30, type: "spring" }}
            >
              <Image
                src={bread2}
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

        {/* cover */}

        <Image
          src={cover}
          alt={""}
          fill
          className={"background -z-10 h-full object-cover"}
        ></Image>

        {/* text */}
        <div
          className="item-center z-10 flex w-full flex-col items-center justify-center gap-y-14 py-20 text-stone-700 xl:flex-row"
          style={{ zIndex: 1 }}
        >
          {/* left side */}
          <motion.div
            viewport={{ once: true }}
            variants={variants_left_side}
            initial={"initial"}
            whileInView={"whileInView"}
            transition={{
              damping: 10,
              stiffness: 30,
              type: "spring",
            }}
            className={`${al.className} item-center art-head padding_left-art flex w-full flex-col items-center justify-center gap-y-[2.8em] text-center text-stone-700 xl:w-1/2`}
          >
            {/* title */}
            <div className="mb-[1em] flex flex-col items-center gap-y-[.1em]">
              <h1 className={`text-[2.3em] font-bold`}>Art of cakes</h1>
              <h2 className="text-[.7em] font-bold uppercase tracking-wide text-tussock-500">
                We create delicious memories
              </h2>
            </div>

            {/* description */}
            <div
              className={`desription max-w-[600px] text-[.6em] font-medium tracking-normal ${ra.className}`}
            >
              <p>
                At{" "}
                <span
                  className={`${dance.className} px-1 text-[1.4em] text-tussock-500`}
                >
                  Gustoso
                </span>
                , We turn cake into art to create special memories. Our expert
                bakers and decorators craft stunning and delicious cakes for all
                occasions. Let us help you make lasting memories.
              </p>
            </div>

            <p className="text-[1.3em] font-semibold">Chef Cook</p>

            <div className="flex items-center justify-center gap-x-[1em] text-[1em] font-normal">
              <p className="border-y-[1px] border-tussock-400/40 py-4 px-5">
                Benito
              </p>
              <Image
                src={chef}
                alt={"chef_picture"}
                width={200}
                height={200}
                className="h-24 w-24 rounded-full object-cover"
              />
              <p className="border-y-[1px] border-tussock-400/40 py-4 px-5">
                Gaspare
              </p>
            </div>

            <div
              className={`${play.className} flex items-center justify-center gap-x-14`}
            >
              <div className=" self-start text-[4em] leading-[20px] text-slate-300">
                “
              </div>
              <div className={`${dance.className} text-[1em] text-tussock-500`}>
                Unique creation for unqiue
                <br /> occasions
              </div>
              <div className="mt-8 self-end text-[4em] leading-[20px] text-slate-300">
                ”
              </div>
            </div>
          </motion.div>

          {/* right side */}

          <motion.div
            viewport={{ once: true }}
            variants={variants_right_side}
            initial={"initial"}
            whileInView={"whileInView"}
            transition={{
              damping: 10,
              stiffness: 30,
              type: "spring",
            }}
            className="relative flex w-full items-center justify-center xl:w-1/2"
          >
            <Image
              src={art}
              alt={"cakes"}
              width={1300}
              height={1300}
              className={"w-11/12 drop-shadow-md"}
            ></Image>
            <Image
              src={sticker}
              alt={"tatesGood_sticker"}
              width={600}
              height={600}
              className={
                "sticker-width absolute top-0 bottom-0 my-auto mx-auto drop-shadow-sm"
              }
            ></Image>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

//animation variants
const variants_left_side = {
  initial: { x: -200, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
};

const variants_right_side = {
  initial: { x: 200, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
};

const variants_bread = {
  initial: { scale: 0.9, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
};
const variants_outline = {
  initial: { opacity: 0, scale: 0.3, rotate: -380 },
  whileInView: { opacity: 1, scale: 1, rotate: 0 },
};
