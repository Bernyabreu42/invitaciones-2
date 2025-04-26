import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Invitaciones",
  description: "Boda de Felix & Mirianny",
  openGraph: {
    title: "Boda de Felix & Mirianny",
    description:
      "¡Nos casamos! Y es imprescindible que formes parte del enlace que estamos organizando.",
    image: "/foto2.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
