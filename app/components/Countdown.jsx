"use client";
import React, { useEffect, useState } from "react";
import { cookie } from "../Font";

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = new Date(targetDate) - now;

      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
          horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutos: Math.floor((difference / 1000 / 60) % 60),
          segundos: Math.floor((difference / 1000) % 60),
        };
      }

      return timeLeft;
    };
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`${cookie.className} flex gap-3 md:gap-5 backdrop-blur-lg p-3 rounded-lg bg-white/30`}
    >
      <div className="flex flex-col items-center ">
        <span className="text-6xl md:text-8xl text-primary">
          {timeLeft.dias || 0}
        </span>
        <span className="text-secondary text-2xl md:text-4xl">Dias</span>
      </div>
      <div className="flex">
        <span className="text-6xl md:text-8xl text-secondary">:</span>
      </div>
      <div className="flex flex-col items-center ">
        <span className="text-6xl md:text-8xl text-primary">
          {timeLeft.horas || 0}
        </span>
        <span className="text-secondary text-2xl md:text-4xl">Horas</span>
      </div>
      <div className="flex">
        <span className="text-6xl md:text-8xl text-secondary">:</span>
      </div>
      <div className="flex flex-col items-center ">
        <span className="text-6xl md:text-8xl text-primary">
          {timeLeft.minutos || 0}
        </span>
        <span className="text-secondary text-2xl md:text-4xl">Minutos</span>
      </div>
      <div className="flex">
        <span className="text-6xl md:text-8xl text-secondary">:</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-6xl md:text-8xl text-primary">
          {timeLeft.segundos || 0}
        </span>
        <span className="text-secondary text-2xl md:text-4xl">Segundos</span>
      </div>
    </div>
  );
}
