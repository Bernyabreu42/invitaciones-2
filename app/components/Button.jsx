import React from "react";
import { cookie } from "../Font";

export default function Button({ onClick, className, children, type }) {
  if (type === "outlined") {
    return (
      <button
        onClick={onClick}
        className={`${cookie.className} ${className} text-3xl border rounded-lg py-2 px-5 flex gap-2 items-center justify-center shadow border-primary text-primary hover:bg-primary hover:text-white transition `}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${cookie.className} ${className} text-3xl border rounded-lg py-2 px-5 flex gap-2 items-center justify-center shadow border-primary text-white hover:bg-white bg-primary hover:text-primary transition `}
    >
      {children}
    </button>
  );
}
