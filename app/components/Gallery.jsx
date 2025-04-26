import React from "react";
import Container from "./Container";
import { contrailOne, cookie } from "../Font";

export default function Gallery() {
  const listImages = [
    "/foto2.webp",
    "/foto3.webp",
    "/foto4.webp",
    "/foto5.webp",
    "/foto6.webp",
  ];

  return (
    <Container className="py-5 bg-[url(/marcos/marco_3.webp)] bg-cover">
      <div className="mb-3">
        <h3 className={`${cookie.className} text-4xl text-primary`}>Galeria</h3>
        <p className={contrailOne.className}>
          Gracias por acompañarnos en este día tan especial para nosotros.
        </p>
      </div>
      <div className="grid grid-cols-3  gap-3">
        {listImages.map((img, index) => (
          <img
            key={img}
            src={img}
            alt="gallery images boda"
            className={`w-full md:h-80 aspect-square md:aspect-video object-cover rounded-lg shadow-md ${
              index === 4 && "col-span-2"
            } ${index === 3 && "h-full"}`}
          />
        ))}
      </div>
    </Container>
  );
}
