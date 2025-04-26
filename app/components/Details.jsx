import React from "react";
import Container from "./Container";
import Title from "./Title";
import Modal from "./Modal";
import { contrailOne, greatVibes } from "../Font";

export default function Details() {
  return (
    <Container className="bg-[url(/marcos/marco_7.webp)] bg-no-repeat bg-cover">
      <div className="">
        <div className="flex items-center justify-center flex-col space-y-3">
          <Title
            title
            text="Detalles de la celebración"
            className="text-center"
          />
          <article className={` flex flex-col items-center`}>
            <h3
              className={`${greatVibes.className} text-4xl text-primary underline`}
            >
              Código de vestimenta
            </h3>
            <p className={`${contrailOne.className} text-center`}>
              Nos place verte hermos@ para nuestro gran día!!!
            </p>
            <img
              src="/imagenes/codigodevestimenta.webp"
              className="w-40 h-40 my-5"
            />
          </article>
          <div className="flex gap-3 mt-5">
            <Modal
              typeButton="outlined"
              textButton="Damas"
              title="vestimenta para damas"
            >
              <ul className="divide-y list-decimal px-2">
                <li className="p-1">Formal de Acto</li>
                <li className="p-1">No colores encendidos</li>
                <li className="p-1">No azul</li>
                <li className="p-1">No blanco</li>
                <li className="p-1 font-bold text-primary">
                  Por favor, eviten tonos llamativos, azul o blanco.
                </li>
              </ul>
              <div className="flex items-center justify-center">
                <img
                  src="/imagenes/traje_mujer.webp"
                  className="w-32 h-44 aspect-square"
                />
              </div>
            </Modal>
            <Modal
              typeButton="outlined"
              textButton="Caballeros"
              title="Vestimenta para caballeros"
            >
              <ul className="divide-y list-decimal px-2">
                <li className="p-1">Camisa formales, corbatas</li>
                <li className="p-1">Pantalones de tela</li>
                <li className="p-1">Trajes colores oscuros</li>
                <li className="p-1">Zapatos de vestir</li>
              </ul>
              <div className="flex items-center justify-center">
                <img
                  src="/imagenes/traje_hombre.webp"
                  className="w-32 h-44 aspect-square"
                />
              </div>
            </Modal>
          </div>
        </div>

        <article className={` flex flex-col items-center space-y-3 mt-5`}>
          <h3
            className={`${greatVibes.className} text-4xl text-primary underline`}
          >
            Te agradecemos
          </h3>
          <p className={`${contrailOne.className} text-center`}>
            Adoramos a tus hijos, pero creemos que necesitan una noche libre.
            Sólo adultos, por favor.
          </p>
          <img src="/imagenes/nobaby.webp" className="w-20 h-20 mt-3" />
        </article>
      </div>
    </Container>
  );
}
