import React from "react";
import Container from "./Container";
import Tabla from "./Tabla";
import Title from "./Title";
import { poltawski } from "../Font";

export default function Gift() {
  return (
    <Container className="bg-[url(/marcos/marco_13.webp)] bg-cover">
      <div className="space-y-5 backdrop-blur-sm bg-white/30 py-10 px-5 rounded-lg">
        <article className="text-center">
          <Title text="Regalos" />
          <p className={`${poltawski.className}`}>
            La bendición de tu presencia es nuestro mayor regalo; si deseas
            honrarnos con algún detalle, será recibido con amor.
          </p>
          {/* <Title text="Opcion 1" className="text-primary" /> */}

          {/* <div className="flex justify-center my-3">
            <Tabla />
          </div> */}

          {/* <Title text="Opcion 2" className="text-primary" /> */}
          {/* <p className={`${poltawski.className}`}>
            ¿Quieres darnos una sorpresa? ¡Entonces te encantarán nuestros
            sobres mágicos! Déjanos volar con tu imaginación y ayúdanos a hacer
            realidad nuestros sueños.
          </p> */}
        </article>
      </div>
    </Container>
  );
}
