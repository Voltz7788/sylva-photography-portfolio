import React from "react";

export default function Hero() {
  return (
    <div className="w-full h-full -mt-24">
      <div
        className={`flex justify-center text-neutral-100 text-3xl md:text-4xl lg:text-5xl uppercase font-bold text-center`}
      >
        <h1 className="px-10 pt-[25rem] md:pt-[27rem] w-5/6 sm:w-3/4 md:w-1/2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Photographer, creative and professional hype-man.
        </h1>
      </div>
    </div>
  );
}
