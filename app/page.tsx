import Art_of_cakes from "@/Components/Art of cakes/art_of_cakes";
import Hero from "@/Components/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>
      <section id="Art_of_cakes">
        <Art_of_cakes />
      </section>
    </main>
  );
}
