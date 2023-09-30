import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";

// Image
import photographer from "../../public/photographer.jpg";
import sylvaImage from "../../public/sylva.jpg";

import IconLink from "./IconLink";
import ButtonLink from "./ButtonLink";

export default function AboutHomePage() {
  return (
    <div className="aboutMe bg-neutral-100 flex justify-center py-16 lg:py-40 overflow-x-hidden">
      <div className="flex items-center w-full lg:w-3/4 flex-col lg:flex-row">
        <div className="w-1/2">
          <Image
            src={sylvaImage}
            width={1000}
            height={1000}
            alt="Sylva Madu"
            className="object-cover rounded-[1000px]"
          />
          <div className="flex gap-5 pt-7">
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
        <div className="lg:w-1/2 px-12 relative pt-7 lg:pt-0 h-full">
          <h1 className="uppercase text-4xl font-bold text-center">
            Hello there,
          </h1>
          <p className="text-2xl text-center pt-2">{`I'm Sylva.`}</p>
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
        </div>
      </div>
    </div>
  );
}
