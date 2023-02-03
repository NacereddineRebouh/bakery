import Image from "next/image";
import React from "react";
import farm from "@/public/sandwich/1.png";
import egg from "@/public/sandwich/4.png";
import seeds from "@/public/sandwich/3.png";
import thing from "@/public/sandwich/5.png";
import sandwich from "@/public/sandwich/2.png";

import { Raleway, Alegreya } from "@next/font/google";
const ra = Raleway({
  subsets: ["latin"],
});
const al = Alegreya({
  subsets: ["latin"],
});

type Props = {};

export default function Sandwich({}: Props) {
  return (
    <div className="w-full  text-stone-700">
      <div
        className={`${al.className} mx-auto flex max-w-[2500px] flex-col bg-[#f3f1e9]`}
      >
        {/* <div className="absolute top-0 right-0 left-0 mx-auto flex h-[400px] w-[700px] items-center justify-center text-center">
          <Image
            src={farm}
            alt={"small_farm"}
            fill
            className="z-20 w-96"
          ></Image>
          <h1 className="text-[2.1em] font-bold">The Jibarito sandwich</h1>
          <h2 className="text-[.7em] font-bold uppercase tracking-wide text-tussock-500">
            The best sandwich you've ever tasted
          </h2>
        </div> */}
        <div className="mx-5 my-40 flex items-center justify-center gap-x-[5em] text-center sm:mx-20 xl:mx-32">
          {/* Left side */}
          <div className="mx-[2em] flex flex-col gap-y-12">
            {/* #1 */}
            <div className="flex flex-col items-center justify-center gap-y-2">
              <Image
                src={seeds}
                alt={"seeds"}
                width={100}
                height={100}
                className="h-24 rounded-full object-cover drop-shadow-xl"
              />
              <p className={`text-[1.8em] font-bold text-tussock-600`}>
                Lorem ipsum
              </p>
              <p
                className={` max-w-xs text-[.8em] font-semibold tracking-wide ${ra.className}`}
              >
                Lorem, Quo aspernatur ipsum. Ut, veritatis deleniti.
              </p>
            </div>

            {/* #2 */}
            <div className="flex flex-col items-center justify-center gap-y-2">
              <Image
                src={egg}
                alt={"eggs"}
                width={100}
                height={100}
                className="h-24 rounded-full object-cover drop-shadow-xl"
              />
              <p className={`text-[1.8em] font-bold text-tussock-600`}>
                Lorem ipsum
              </p>
              <p
                className={`max-w-xs text-[.8em] font-semibold tracking-wide ${ra.className}`}
              >
                Lorem, Quo aspernatur ipsum. Ut, veritatis deleniti.
              </p>
            </div>

            {/* #3 */}
            <div className="flex flex-col items-center justify-center gap-y-2">
              <Image
                src={thing}
                alt={"thing"}
                width={100}
                height={100}
                className="h-24 rounded-full object-cover drop-shadow-xl"
              />
              <p className={`text-[1.8em] font-bold text-tussock-600`}>
                Lorem ipsum
              </p>
              <p
                className={`max-w-xs text-[.8em] font-semibold tracking-wide ${ra.className}`}
              >
                Lorem, Quo aspernatur ipsum. Ut, veritatis deleniti.
              </p>
            </div>
          </div>

          {/* right side */}
          <div className="flex h-full w-full max-w-[1000px] items-center justify-center bg-red-400 py-[6em] pl-12">
            <Image
              src={sandwich}
              alt={"sandwich"}
              width={1000}
              height={1000}
              className={"border-8 border-tussock-50 object-cover"}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
// f3f1e9
