import Image from "next/image";
import React from "react";
import background from "@/public/Breakfast/4.jpg";
import letter from "@/public/Breakfast/1.2.png";
import croissant from "@/public/Breakfast/9.png";
import outline from "@/public/Breakfast/10.png";
import horn from "@/public/Breakfast/3.png";

import {
  Alegreya,
  Raleway,
  Dancing_Script,
  Playfair_Display,
} from "@next/font/google";
import { MotionConfig } from "framer-motion";
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

export default function Breakfast({}: Props) {
  return (
    <div className="w-full">
      <div className="relative mx-auto flex min-h-[850px] max-w-[2500px] flex-col">
        {/* sticker */}
        <div className="absolute -top-1 mx-auto flex h-2 w-full items-center justify-center bg-stone-50 drop-shadow-lg" />
        <div className="absolute -top-14 right-0 left-0 mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-stone-50">
          <Image
            src={croissant}
            alt={""}
            width={100}
            height={100}
            className="z-10 w-20 opacity-70"
          ></Image>
        </div>
        <div className="absolute -top-20 right-0 left-0 mx-auto flex h-40 w-40 items-center justify-center rounded-full">
          <Image
            src={outline}
            alt={""}
            width={100}
            height={100}
            className="z-10 w-36 opacity-70"
          ></Image>
        </div>

        {/* background */}
        <Image
          src={background}
          alt={""}
          fill
          quality={100}
          className={
            "background -z-10 h-full object-cover object-center xl:object-center"
          }
        ></Image>

        <div
          className="z-10 flex h-full flex-col items-center justify-center gap-y-14 py-24 text-stone-700 xl:flex-row"
          style={{ zIndex: 1 }}
        >
          {/* left side */}
          <div
            className={`${al.className} Breakfast flex max-h-[1000px] flex-col items-end justify-center text-center tracking-wide text-tussock-50 xl:w-2/5 xl:px-[1.4em] `}
          >
            <div className="flex flex-col items-center justify-center gap-y-[.6em] text-center xl:mr-[2em]">
              <div className="mb-[.6em] flex flex-col items-center gap-y-2">
                <h1 className={`text-[1em] font-bold`}>Breakfast</h1>
                <h2 className="text-[.4em] font-bold uppercase tracking-wide text-tussock-500">
                  7am breakfast? we&apos;re open!
                </h2>
              </div>

              <div className="flex flex-col items-center justify-center gap-y-1">
                <div className="">
                  <h1 className={`text-[.7em] font-bold`}>Full breakfast</h1>
                  <h2
                    className={`${ra.className} text-[.3em] font-medium tracking-wide text-neutral-400`}
                  >
                    Croissant, juice and a cup of coffee.
                  </h2>
                  <p className="text-[.85em] font-medium text-tussock-300">
                    $12.49
                  </p>
                </div>
                <Image
                  src={horn}
                  alt={""}
                  width={120}
                  height={120}
                  className="z-10 w-28"
                />
                <div className="">
                  <h1 className={`text-[.7em] font-bold`}>Toast & Jam</h1>
                  <h2
                    className={`${ra.className} text-[.3em] font-medium tracking-wide text-neutral-400`}
                  >
                    Toasted bread with fruity spread.
                  </h2>
                  <p className="text-[.85em] font-medium text-tussock-300">
                    $4.90
                  </p>
                </div>
                <Image
                  src={horn}
                  alt={""}
                  width={120}
                  height={120}
                  className="z-10 w-28"
                />

                <div className="">
                  <h1 className={`text-[.7em] font-bold`}>Muffins</h1>
                  <h2
                    className={`${ra.className} text-[.3em] font-medium tracking-wide text-neutral-400`}
                  >
                    Soft bread with sweet topping.
                  </h2>
                  <p className="text-[.85em] font-medium text-tussock-300">
                    $3.95
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* right side */}

          <div
            className={`${al.className} relative mx-[1em] flex max-w-[500px] items-center justify-center xs:mx-[4em] xl:w-3/5 5xl:max-w-[800px]`}
          >
            <Image
              src={letter}
              alt={"cakes"}
              width={1210}
              height={1210}
              className={"drop-shadow-md xl:ml-28"}
            ></Image>
            <div className="absolute right-0 left-0 top-[2.4em] mx-auto flex flex-col items-center justify-center gap-y-[1.8em] px-10 text-center xl:ml-28 xl:px-2 5xl:gap-y-[10em]">
              <div className="mb-8 flex w-full justify-around text-[.9em] font-bold xs:mb-14 xl:mb-24">
                <h2>EST.</h2> <h2>1830</h2>
              </div>
              <h1 className="text-[1.6em] font-bold leading-none xl:text-[2.8em]">
                Your morning Escape with Flair
              </h1>
              <p className="text-[.75em] font-medium tracking-wide text-stone-600 xl:text-[.9em]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium recusandae sit officia provident dolorum placeat
                deleniti sint pariatur!
              </p>

              <button
                className={`${dance.className} justify-self-end border-2 border-tussock-800 px-[1.5em] py-[.5em] text-[1em] font-bold text-tussock-700 transition-all duration-200 hover:bg-tussock-300/40 xs:mt-8 xl:px-[2.1em] xl:py-[.4em] xl:text-[1.4em] `}
              >
                READ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
