import React from "react";
import bread from "@/public/art of cakes/5.png";
import cover from "@/public/art of cakes/3.png";
import Image from "next/image";
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
          // //   style={{ backgroundImage: `url(${cover.src})` }}

          className={"background -z-10 h-full object-cover"}
        ></Image>

        {/* text */}
        <div className="z-10 text-stone-700" style={{ zIndex: 1 }}>
          qsdsqdsqd
        </div>
      </div>
    </div>
  );
}
