"use client";
import React, { useRef } from "react";
import Masonry from "react-masonry-css";
import Image from "next/image";
import LightGalleryComponent from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { LightGallery } from "lightgallery/lightgallery";

import musicImage4 from "../../public/music-portrait-4.jpg";
import musicImage3 from "../../public/music-portrait-3.jpg";
import musicImage2 from "../../public/music-portrait-2.jpg";
import musicImage1 from "../../public/music-portrait-1.jpg";

const images = [
  musicImage1,
  musicImage2,
  musicImage3,
  musicImage4,
  musicImage1,
  musicImage2,
  musicImage3,
  musicImage4,
  musicImage1,
  musicImage2,
  musicImage3,
  musicImage4,
];

export default function PortfolioPage() {
  const lightboxRef = useRef<LightGallery | null>(null);

  return (
    <div>
      <div className="flex justify-center mt-20">
        <Masonry
          breakpointCols={3}
          className="flex -ml-[30px] w-10/12"
          columnClassName="pl-[30px] bg-clip-padding"
        >
          {images.map((item, index) => (
            <Image
              key={item.src}
              src={item}
              alt={`${item}`}
              className="mb-10"
              placeholder="blur"
              onClick={() => {
                lightboxRef.current?.openGallery(index);
              }}
            />
          ))}
        </Masonry>
      </div>
      <LightGalleryComponent
        onInit={(ref) => {
          if (ref) {
            lightboxRef.current = ref.instance;
          }
        }}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        dynamic
        dynamicEl={images.map((image) => ({
          src: image.src,
          thumb: image.src,
        }))}
      />
    </div>
  );
}
