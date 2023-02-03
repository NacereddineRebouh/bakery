import React from "react";
import { Alegreya } from "@next/font/google";
import logo from "@/public/logo/logo3.png";
import Image from "next/image";
import Link from "next/link";

const al = Alegreya({
  subsets: ["latin"],
});

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="mx-auto flex max-w-[2500px] flex-col">
      <div
        className={`${al.className} mx-5 flex min-h-[64px] flex-col items-center gap-y-[1.3em] truncate text-stone-700 sm:mx-20 md:gap-y-[2em] lg:flex-row lg:gap-y-0 xl:mx-32`}
      >
        <div className="flex w-full flex-row items-center justify-around border-t-[2px] border-zinc-600/40 py-6 px-5 text-[.9em] font-medium uppercase tracking-widest md:text-[1.1em] lg:border-y-[2px]">
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
        </div>
        <Image
          src={logo}
          alt={""}
          width={230}
          height={230}
          className="mx-[3.1em] h-[3em] object-contain opacity-90"
        />
        <div className="flex w-full flex-row items-center justify-around border-b-[2px] border-zinc-600/40 py-6 px-5 text-[.9em] font-medium uppercase tracking-widest md:text-[1.1em] lg:border-y-[2px]">
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
        </div>
      </div>
    </div>
  );
}
