"use client";
import Image from "next/image";
import React, { useRef } from "react";
import background from "@/public/Hero/1.png";
import dotted_line from "@/public/Hero/2.png";
//font
import { Playfair_Display, Raleway } from "@next/font/google";
import { motion, useInView } from "framer-motion";
const al = Playfair_Display({
  subsets: ["latin"],
});

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
          <div className="gap title absolute top-0 bottom-0 right-0 left-0 mx-auto mb-0 flex w-full max-w-[1000px] flex-col items-center justify-center text-center text-stone-900 sm:mb-0">
            <motion.h1
              viewport={{ once: true }}
              variants={variants_text}
              initial={"initial"}
              whileInView={"visible"}
              transition={{
                damping: 10,
                stiffness: 30,
                type: "spring",
              }}
              className={`${al.className}  mx-1 text-stone-50 xs:mx-0`}
            >
              Pastry with love
            </motion.h1>
            {/* <Image
              src={dotted_line}
              width={400}
              height={400}
              alt={"dotted_line"}
              className={"w-[2.9em]"}
            /> */}
            <Line classname="w-[3.4em]" />
            <motion.p
              viewport={{ once: true }}
              variants={variants_text}
              initial={"initial"}
              whileInView={"visible"}
              transition={{
                damping: 10,
                stiffness: 30,
                type: "spring",
                delay: 0.2,
              }}
              className={`${ra.className} subhead mx-2 max-w-[1000px] font-light leading-tight tracking-widest text-stone-50 sm:mx-4 lg:mx-0`}
            >
              We&apos;re bringing you fresh ingredients every day in ways you
              can&apos;t resist.
            </motion.p>

            <motion.button
              viewport={{ once: true }}
              variants={variants_button}
              initial={"initial"}
              whileInView={"visible"}
              transition={{
                damping: 10,
                stiffness: 30,
                type: "spring",
                delay: 0.4,
              }}
              className={`group border border-dashed border-stone-50/50 bg-stone-800/30 text-sm font-medium uppercase tracking-widest text-stone-50 outline-none transition-all duration-200 hover:bg-stone-600/100 ${al.className} button-text`}
            >
              <p className=" mx-[2em] my-[1em] transition-all duration-300 group-hover:scale-105 group-active:scale-100">
                our menu
              </p>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

const Line = ({ classname }: { classname: string }) => {
  return (
    <motion.svg
      width="553"
      height="40"
      className={classname}
      viewBox="0.26680896478137583 172.37822055713195 552.8857596584842 39.991736684157985"
    >
      <g
        transform="matrix(1.05 0 0 1.05 276.71 192.37)"
        id="DgsLzOL3VLn9dYRHv2pDv"
      >
        <motion.path
          variants={icon}
          initial={"initial"}
          animate={"animate"}
          transition={{
            damping: 10,
            stiffness: 30,
            type: "spring",
          }}
          style={{
            fill: "rgba(255,255,255,0)",
            stroke: "rgb(255,255,255)",
          }}
          // strokeDasharray="19,20"
          strokeWidth={4}
          transform=" translate(0, 0)"
          d="M -261.59826 3.93266 C -255.62398 4.6175299999999995 -233.73981999999998 -1.78842 -220.55383999999998 -6.392479999999999 L -220.55383999999998 -6.392479999999999 C -178.06986999999998 -21.22632 -131.65268999999998 -20.18285 -89.87823999999998 -3.454849999999999 L -74.16215999999997 2.823280000000001 L -74.16215999999997 2.823280000000001 C -30.10468999999997 20.422990000000002 18.841570000000033 21.44236 63.59360000000004 5.692220000000001 L 75.49364000000004 1.5040900000000006 L 75.49364000000004 1.5040900000000006 C 132.76500000000004 -18.64799 195.26115000000004 -18.260969999999997 252.27854000000002 2.5988800000000003 C 255.19625000000002 3.6663300000000003 260.2516 4.0504 261.59826000000004 3.9326600000000003"
          strokeLinecap="round"
        />
      </g>
    </motion.svg>
  );
};

//animation variants
const icon = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
  },
};

const variants_text = {
  initial: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};
const variants_button = {
  initial: { opacity: 0 },
  visible: { opacity: 1 },
};
