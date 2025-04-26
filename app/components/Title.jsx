import React from "react";
import { cookie } from "../Font";

export default function Title({
  title,
  subtitle,
  className = "",
  text = "Default title",
}) {
  if (title) {
    return (
      <h2 className={`${cookie.className} ${className} text-4xl`}>{text}</h2>
    );
  }

  if (subtitle) {
    return (
      <h4 className={`${cookie.className} ${className} text-3xl`}>{text}</h4>
    );
  }

  return (
    <h1 className={`${cookie.className} ${className} text-4xl`}>{text}</h1>
  );
}
