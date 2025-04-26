import {
  Cookie,
  Contrail_One,
  Great_Vibes,
  Poltawski_Nowy,
} from "next/font/google";

export const cookie = Cookie({ subsets: ["latin"], weight: "400" });

export const contrailOne = Contrail_One({ subsets: ["latin"], weight: "400" });

export const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

export const poltawski = Poltawski_Nowy({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
