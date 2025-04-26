import React from "react";
import { cookie } from "../Font";
import Countdown from "./Countdown";
import Container from "./Container";

export default function SectionCouple() {
  return (
    <Container className="bg-[url(/marcos/marco_1.webp)] bg-cover  flex items-center justify-center">
      <div className="relative flex flex-col items-center ">
        <div className={` antialiased flex flex-col items-center space-y-5`}>
          <span className={`${cookie.className} text-5xl text-primary z-10`}>
            Faltan
          </span>
          <Countdown targetDate="2025-05-31T18:00:00" />
          <span className={`${cookie.className} text-5xl text-primary z-10`}>
            Para nuestra boda
          </span>
        </div>
      </div>
    </Container>
  );
}
