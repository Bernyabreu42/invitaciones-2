"use client";
import React, { useEffect, useRef, useState } from "react";
import { FiPause, FiMusic } from "react-icons/fi";

export default function Music() {
  const audioRef = useRef(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const finAudio = () => {
      if (audioRef.current) {
        setPlay(false); // Cambia el estado a 'play' cuando el audio termina
      }
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("ended", finAudio);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("ended", finAudio);
      }
    };
  }, [audioRef]);

  function handlerPlay() {
    setPlay((prevPlay) => !prevPlay);
    if (audioRef.current) {
      play ? audioRef.current.pause() : audioRef.current.play();
    }
  }

  return (
    <>
      <div className="z-50">
        {!play && (
          <img
            src="/imagenes/flecha.webp"
            className="fixed bottom-20 right-8 h-28 w-8 aspect-square rotate-90 animate-bounce"
          />
        )}
        <span className="animate-ping bg-primary border p-3 rounded-full block w-9 h-9 fixed bottom-[36px] right-[35px]"></span>
        <button
          onClick={handlerPlay}
          className="p-3 rounded-full bg-white shadow-lg border fixed bottom-7 right-7 z-50"
        >
          {play ? (
            <FiPause size={25} color="#fe87a1" />
          ) : (
            <FiMusic size={25} color="#fe87a1" />
          )}
        </button>
      </div>
      <audio ref={audioRef}>
        <source src="/musica/por_siempre.mp3" type="audio/mp3" />
      </audio>
    </>
  );
}
