import React from "react";
import { legendType } from "./legends";
import { domAnimation, LazyMotion, m } from "framer-motion";
import Image from "next/image";

const variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

interface LegendCardProps {
  legendData: legendType;
  onClick: () => void;
}

export default function LegendCard({ legendData, onClick }: LegendCardProps) {
  return (
    <LazyMotion features={domAnimation}>
      <m.article
        initial="hidden"
        animate="visible"
        variants={variants}
        className="absolute z-10 bg-halloween-gradient w-[400px] top-0 left-0 py-3 rounded-md px-4 "
      >
        <section className="flex justify-between text-2xl">
          <h2 className="text-center font-unifraktur mb-2 tracking-wider">
            {legendData.title}
          </h2>
          <button onClick={onClick}>X</button>
        </section>
        <section className="flex">
          <Image
            className="max-w-[180px] max-h-[320px] animate-slow-pulse object-cover mr-4"
            src={legendData.img}
            alt={legendData.title}
            width={2000}
            height={2000}
          />
          <div className="font-cinzel">
            <h3 className="text-lg text-orange-400">
              {legendData.country} - {legendData.date}
            </h3>
            <p className="font-light">{legendData.origin}</p>
          </div>
        </section>
      </m.article>
    </LazyMotion>
  );
}
