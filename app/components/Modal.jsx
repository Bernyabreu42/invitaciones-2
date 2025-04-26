"use client";
import React, { useRef } from "react";
import { FiXCircle } from "react-icons/fi";
import { contrailOne, cookie } from "../Font";
import Button from "./Button";

export default function Modal({
  children,
  textButton = "Ver en google maps",
  title = "Default title",
  handler,
  typeButton,
}) {
  const refDialog = useRef(null);

  function handlerAction() {
    handler();
    // refDialog.current.showModal();
  }

  return (
    <>
      <dialog ref={refDialog} className="border rounded-lg shadow">
        <div className="flex items-center justify-between gap-3 border-b px-5 py-2 ">
          <h4 className={`${contrailOne.className} text-xl text-primary`}>
            {title}
          </h4>
          <button
            onClick={() => refDialog.current.close()}
            className="hover:scale-110 transition-all active:scale-90"
          >
            <FiXCircle size={23} color="#fe87a1" />
          </button>
        </div>
        <div className="max-w-[500px] w-full flex flex-col p-5">
          {typeof children === "function" ? children(refDialog) : children}
        </div>
        {/* {footer && (
          <div className="border-t p-2">
            <button
              onClick={handlerAction}
              className={`${cookie.className} text-4xl border rounded-lg py-2 px-5 flex gap-2 items-center justify-center shadow border-primary text-white bg-primary hover:bg-white hover:text-primary transition w-full`}
            >
              {textButtonAction}
            </button>
          </div>
        )} */}
      </dialog>

      <Button type={typeButton} onClick={() => refDialog.current.showModal()}>
        {textButton}
      </Button>
      {/* <button
        onClick={() => refDialog.current.showModal()}
        className={`${cookie.className} text-4xl border rounded-lg py-2 px-5 flex gap-2 items-center justify-center shadow border-primary text-primary hover:bg-primary hover:text-white transition `}
      >
        {textButton}
      </button> */}
    </>
  );
}
