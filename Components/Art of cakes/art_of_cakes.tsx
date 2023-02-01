import React from "react";
import bread from "@/public/art of cakes/5.png";
import cover from "@/public/art of cakes/3.png";
import chef from "@/public/art of cakes/4.png";
import art from "@/public/art of cakes/1.png";
import sticker from "@/public/art of cakes/2.png";
import Image from "next/image";

import { Alegreya } from "@next/font/google";
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

export default function Art_of_cakes({}: Props) {
  return (
    <div className="w-full">
      <div className="relative mx-auto flex min-h-[850px] max-w-[2500px] flex-col">
        {/* bread sticker */}
        <div className="mx-auto flex h-2 w-full items-center justify-center bg-stone-50">
          <div className="absolute -top-9 mx-auto h-20 w-20 rounded-full bg-stone-50" />
          <Image
            src={bread}
            alt={""}
            width={110}
            height={110}
            className="z-10"
          ></Image>
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
          <div
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
                  Gutoso
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
          </div>

          {/* right side */}

          <div className="relative flex w-full items-center justify-center xl:w-1/2">
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
          </div>
        </div>
      </div>
    </div>
  );
}
