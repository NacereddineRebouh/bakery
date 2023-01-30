import Image from "next/image";
import React from "react";
import background from "@/public/Hero/1.png";
//font
import { Alegreya } from "@next/font/google";
const al = Alegreya({
  subsets: ["latin"],
});

import { Raleway } from "@next/font/google";
const ra = Raleway({
  subsets: ["latin"],
});

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="w-full">
      <div className="relative mx-auto flex max-w-[2500px] flex-col">
        <div className="">
          {/* Background */}
          <Image
            src={background}
            style={{ objectFit: "cover" }}
            alt={""}
            width={2500}
            height={2500}
            className={"min-h-[680px] object-cover sm:min-h-[800px]"}
          ></Image>

          {/* text */}
          <div className="gap absolute top-0 bottom-0 right-0 left-0 mx-auto mb-0 flex w-full max-w-[1000px] flex-col items-center justify-center text-center text-stone-900 sm:mb-0">
            <h1 className={`${al.className} title mx-1 text-stone-50 xs:mx-0`}>
              Pastry with love
            </h1>
            <p
              className={`${ra.className} subhead mx-2 max-w-[1000px] font-light leading-tight tracking-widest text-stone-50 sm:mx-4 lg:mx-0`}
            >
              We&apos;re bringing you fresh ingredients every day in ways you
              can&apos;t resist.
            </p>

            <button
              className={`group border border-dashed border-stone-50/50 bg-stone-800/30 text-sm font-medium uppercase tracking-widest text-stone-50 transition-all duration-200 hover:bg-stone-600/100 ${al.className} button-text`}
            >
              <p className=" mx-[2em] my-[1em] transition-all duration-300 group-hover:scale-105 group-active:scale-100">
                our menu
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
