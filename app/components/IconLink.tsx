"use client";
import React from "react";
import { Icon } from "@iconify/react";

type props = {
  icon: string;
  href: string;
};

export default function IconLink({ icon, href }: props) {
  return (
    <a href={href} target="_blank">
      <Icon
        icon={icon}
        width={30}
        className="text-neutral-700 hover:text-blue-500 transition-all"
      />
    </a>
  );
}
