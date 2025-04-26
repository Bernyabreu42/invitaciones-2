import React from "react";

export default function Container({ children, className = "" }) {
  return (
    <section
      className={`${className} flex flex-col items-center justify-center snap-section`}
    >
      <div className="w-[80%] m-auto">{children}</div>
    </section>
  );
}
