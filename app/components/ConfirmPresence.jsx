"use client";
import React, { useState } from "react";
import Container from "./Container";
import Modal from "./Modal";
import Title from "./Title";
import Button from "./Button";
import { FiAlertCircle } from "react-icons/fi";
import { convertirAArregloDeNombres } from "../lib";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ConfirmPresence() {
  const router = useRouter();
  const [rawForm, setRawForm] = useState({
    lista_personas: "",
    numero_personas: "",
    motivo: "",
  });

  const handlerChange = (e) => {
    setRawForm({ ...rawForm, [e.target.name]: e.target.value });
  };

  function ConfirmarNovio({ e, current }) {
    e.preventDefault();
    const listaDePersonas = convertirAArregloDeNombres(rawForm.lista_personas);

    if (listaDePersonas.length !== +rawForm.numero_personas) {
      toast.error(
        "hay una diferencia entre el numero de personas y los nombres que has ingresado, favor revisar!"
      );
      return;
    }

    const nombresFormateados = encodeURIComponent(listaDePersonas.join(", "));

    let message = `*¡Confirmamos%20nuestra%20asistencia%20a%20la%20boda!*%0A%0A-%20Número%20de%20personas%20que%20asistirán:%20${rawForm.numero_personas}%0A-%20Asistencia%20confirmada%20por:%20${nombresFormateados}%0A%0A_Gracias%20por%20la%20invitación,%20estamos%20muy%20emocionados%20por%20el%20gran%20día._`;

    current.close();
    setRawForm({
      lista_personas: "",
      numero_personas: "",
      motivo: "",
    });
    router.push(`https://wa.me/+18493307816?text=${message}`);
  }

  function ConfirmarNovia({ e, current }) {
    e.preventDefault();
    const listaDePersonas = convertirAArregloDeNombres(rawForm.lista_personas);

    if (listaDePersonas.length !== +rawForm.numero_personas) {
      toast.error(
        "hay una diferencia entre el numero de personas y los nombres que has ingresado, favor revisar!"
      );
      return;
    }

    const nombresFormateados = encodeURIComponent(listaDePersonas.join(", "));

    let message = `*¡Confirmamos%20nuestra%20asistencia%20a%20la%20boda!*%0A%0A-%20Número%20de%20personas%20que%20asistirán:%20${rawForm.numero_personas}%0A-%20Asistencia%20confirmada%20por:%20${nombresFormateados}%0A%0A_Gracias%20por%20la%20invitación,%20estamos%20muy%20emocionados%20por%20el%20gran%20día._`;

    current.close();
    setRawForm({
      lista_personas: "",
      numero_personas: "",
      motivo: "",
    });
    router.push(`https://wa.me/+18298533394?text=${message}`);
  }

  function NoPodreAsistir({ e, current }) {
    e.preventDefault();
    const listaDePersonas = convertirAArregloDeNombres(rawForm.lista_personas);

    if (listaDePersonas.length !== +rawForm.numero_personas) {
      toast.error(
        "hay una diferencia entre el numero de personas y los nombres que has ingresado, favor revisar!"
      );
      return;
    }

    const nombresFormateados = encodeURIComponent(listaDePersonas.join(", "));

    let message = `*Lamentamos%20no%20poder%20asistir%20a%20la%20boda.*%0A%0A-%20Número%20de%20personas%20que%20no%20asistirán:%20${
      rawForm.numero_personas
    }%0A-%20Nombres:%20${nombresFormateados}%0A-%20Motivo:%20${encodeURIComponent(
      rawForm.motivo
    )}%0A%0A> Les%20deseamos%20lo%20mejor%20en%20su%20día%20especial.%20¡Felicidades%20a%20los%20novios!`;

    current.close();
    setRawForm({
      lista_personas: "",
      numero_personas: "",
      motivo: "",
    });
    router.push(`https://wa.me/+18498156407?text=${message}`);
  }

  return (
    <Container className="bg-[url(/foto_3.webp)] bg-cover">
      <div className="space-y-5 backdrop-blur-sm bg-white/30 py-10 px-5 rounded-lg">
        <article className="text-center">
          <Title text="Asistencia" />
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-3 mt-3">
            <Modal
              textButton="Confirmar asistencia"
              title="Ayudanos con los siguientes datos"
            >
              {({ current }) => (
                <form className="flex flex-col w-full gap-3">
                  <input
                    onChange={handlerChange}
                    type="number"
                    name="numero_personas"
                    value={rawForm.numero_personas}
                    placeholder="Numero de personas que asistirán"
                    className="p-2 border rounded-lg outline-primary"
                  />
                  <input
                    onChange={handlerChange}
                    type="text"
                    name="lista_personas"
                    value={rawForm.lista_personas}
                    placeholder="Nombres: Felix, Mirianny..."
                    className="p-2 border rounded-lg outline-primary"
                  />
                  <div className="flex items-center justify-start gap-2">
                    <FiAlertCircle color="81793a" />
                    <span className="text-primary text-base">
                      Separa los nombres por comas
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      className="w-full md:w-auto"
                      type="outlined"
                      onClick={(e) => ConfirmarNovia({ e, current })}
                    >
                      Confirmar Novia
                    </Button>
                    <Button
                      className="w-full md:w-auto"
                      type="outlined"
                      onClick={(e) => ConfirmarNovio({ e, current })}
                    >
                      Confirmar Novio
                    </Button>
                  </div>
                </form>
              )}
            </Modal>

            <Modal
              textButton="No podre asistir"
              title="Lamentamos que no puedas venir"
            >
              {({ current }) => (
                <form className="flex flex-col w-full gap-3">
                  <input
                    onChange={handlerChange}
                    type="number"
                    name="numero_personas"
                    value={rawForm.numero_personas}
                    placeholder="Numero de personas que no asistirán"
                    className="p-2 border rounded-lg outline-primary"
                  />
                  <input
                    onChange={handlerChange}
                    type="text"
                    name="lista_personas"
                    value={rawForm.lista_personas}
                    placeholder="Nombres: Felix, Mirianny..."
                    className="p-2 border rounded-lg outline-primary"
                  />
                  <input
                    onChange={handlerChange}
                    type="text"
                    name="motivo"
                    value={rawForm.motivo}
                    placeholder="Motivo (opcional)"
                    className="p-2 border rounded-lg outline-primary"
                  />
                  <div className="flex items-center justify-start gap-2">
                    <FiAlertCircle color="81793a" />
                    <span className="text-primary text-base">
                      Separa los nombres por comas
                    </span>
                  </div>
                  <Button
                    className="w-full md:w-auto"
                    type="outlined"
                    onClick={(e) => NoPodreAsistir({ e, current })}
                  >
                    Confirmar
                  </Button>
                </form>
              )}
            </Modal>
          </div>
        </article>
      </div>
    </Container>
  );
}
