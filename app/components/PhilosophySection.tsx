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
      <div className="grid grid-cols-philosphy grid-rows-philosophy gap-3 mx-2">
        <Image
          src={MusicPortrait1}
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="row-span-2 flex flex-col justify-between gap-3">
          <Image src={MusicLandscape1} alt="" />
          <div className="text-center w-3/5 m-auto">
            <h2 className="text-3xl font-bold uppercase">My Philosophy</h2>
            <p className="text-xl">The best wedding photography is candid.</p>
            <p className="mt-7">
              {`It's when you're being yourself and forget all about the camera.
              It's all of those inbetween moments. Not Planned. Not Posed. Just
              real moments captured in the most beautiful way possible.`}
            </p>
          </div>
          <Image src={MusicLandscape2} alt="" />
        </div>
        <Image
          src={MusicPortrait3}
          alt=""
          className="object-cover w-full h-full"
        />
        <Image
          src={MusicPortrait2}
          alt=""
          className="object-cover w-full h-full"
        />
        <Image
          src={MusicPortrait4}
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
