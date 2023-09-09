import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";

// Image
import photographer from "../../public/photographer.jpg";
import IconLink from "./IconLink";
import ButtonLink from "./ButtonLink";

export default function AboutHomePage() {
  return (
    <div className="bg-neutral-100 flex justify-center py-40 h-screen">
      <div className="flex w-3/4">
        <Image
          src={photographer}
          width={900}
          height={900}
          alt="Sylva Madu"
          className="object-cover w-1/2 rounded-sm"
        />
        <div className="w-1/2 px-12 relative">
          <h1 className="uppercase text-4xl font-bold text-center">
            Hello there,
          </h1>
          <p className="text-2xl text-center pt-2">{`I'm sylva.`}</p>
          <p className="pt-8 text-lg text-center">
            {`I'm a Photographer based in London, and I've been taking photos for
            about 4 years. My love for photography was born from my innate
            fascination with still images and the stories that could be told
            through them.`}
            <br />
            <br />
            {`
            I'm a fan of creating "Strong and Bold" Images that
            stand out, but I also love some relaxed candid photography that
            captures the rawness of my surroundings. As a result, my favourite
            type of photography is live events photography.`}
          </p>
          <div className="flex gap-10 justify-center pt-20">
            <ButtonLink title="Portfolio" href="/portfolio" />
            <ButtonLink title="Contact Me" href="/portfolio" />
          </div>
          <div className="flex gap-5 absolute left-12 bottom-0">
            <IconLink
              icon="mdi:instagram"
              href="https://www.instagram.com/sylva.madu_photography_/"
            />
            <IconLink
              icon="mdi:linkedin"
              href="https://www.linkedin.com/in/sylva-madu-9b8531263/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}