import React from "react";
import Image from "next/image";

// Images
import MusicLandscape1 from "../../public/music-landscape-1.jpg";
import MusicLandscape2 from "../../public/music-landscape-2.jpg";
import MusicPortrait1 from "../../public/music-portrait-1.jpg";
import MusicPortrait2 from "../../public/music-portrait-2.jpg";
import MusicPortrait3 from "../../public/music-portrait-3.jpg";
import MusicPortrait4 from "../../public/music-portrait-4.jpg";

export default function PhilosophySection() {
  return (
    <div>
      <div className="flex flex-col lg:grid lg:grid-cols-philosphy lg:grid-rows-philosophy gap-3 lg:mx-2">
        <Image
          src={MusicPortrait1}
          alt=""
          className="object-cover w-full h-full hidden lg:inline-block"
        />
        <div className="row-span-2 flex flex-col justify-between gap-3 h-full">
          <Image src={MusicLandscape1} alt="" className="object-cover w-full" />
          <div className="text-center w-4/5 lg:w-4/5 xl:w-3/5 m-auto my-10 sm:my-20 md:my-32 lg:my-0">
            <h2 className="text-2xl md:text-3xl font-bold uppercase">
              My Philosophy
            </h2>
            <p className="text-base md:text-lg lg:text-xl mt-2">
              The best wedding photography is candid.
            </p>
            <p className="mt-7 text-sm md:text-md lg:text-base">
              {`It's when you're being yourself and forget all about the camera.
              It's all of those inbetween moments. Not Planned. Not Posed. Just
              real moments captured in the most beautiful way possible.`}
            </p>
          </div>
          <Image src={MusicLandscape2} alt="" className="object-cover w-full" />
        </div>
        <Image
          src={MusicPortrait3}
          alt=""
          className="object-cover w-full h-full hidden lg:inline-block"
        />
        <Image
          src={MusicPortrait2}
          alt=""
          className="object-cover w-full h-full hidden lg:inline-block"
        />
        <Image
          src={MusicPortrait4}
          alt=""
          className="object-cover w-full h-full hidden lg:inline-block"
        />
      </div>
    </div>
  );
}
