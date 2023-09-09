import React from "react";

type props = {
  title: string;
  href: string;
};

export default function ButtonLink({ title, href }: props) {
  return (
    <a
      href={href}
      className="bg-blue-500 text-white font-semibold w-40 py-2 rounded-sm text-center text-sm hover:scale-110 transition-all"
    >
      {title}
    </a>
  );
}
