import React from "react";
import { cookie, greatVibes } from "../Font";

// M50,150 C150,100 350,100 450,150
export default function Hero() {
  return (
    <div className="bg-[#fe87a1] relative snap-section">
      <div className="bg-[url(/foto_2.webp)] bg-no-repeat bg-contain bg-center relative h-screen flex justify-center mask_image"></div>
      <div className="absolute bottom-14 md:bottom-0 z-50 w-full text-center p-5 pb-10">
        <div className={` relative flex flex-col items-center  w-max m-auto `}>
          <span className="font-serif text-[230px] absolute -bottom-[80px] text-white/30 h-max">
            &
          </span>
          <span
            className={`${greatVibes.className} antialiased text-8xl text-white z-10`}
          >
            Felix
          </span>
          <span
            className={`${greatVibes.className} antialiased text-8xl text-white z-10`}
          >
            Mirianny
          </span>
        </div>

        <div className="relative flex items-center justify-center ">
          <img src="/iconos/ramo.svg" className="w-10 h-10 -rotate-[25deg]" />
          <h1
            className={`${cookie.className} antialiased text-white text-4xl `}
          >
            Nos casamos
          </h1>
          <img
            src="/iconos/ramo.svg"
            className="w-10 h-10 rotate-[25deg] -scale-x-100"
          />
        </div>
      </div>
    </div>
  );
}
