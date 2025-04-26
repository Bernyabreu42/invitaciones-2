import ConfirmPresence from "./components/ConfirmPresence";
import Details from "./components/Details";
import Gallery from "./components/Gallery";
import Gift from "./components/Gift";
import Hero from "./components/Hero";
import Music from "./components/Music";
import SectionCouple from "./components/SectionCouple";
import WhereAndWhen from "./components/WhereAndWhen";

export default function Home() {
  return (
    <div className="snap-container">
      <Hero />
      <SectionCouple />
      <WhereAndWhen />
      <Details />
      <Gift />
      <ConfirmPresence />
      <Gallery />
      <Music />
    </div>
  );
}
