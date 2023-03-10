import Art_of_cakes from "@/Components/Art of cakes/art_of_cakes";
import Breakfast from "@/Components/Breakfast/Breakfast";
import Hero from "@/Components/Hero/Hero";
import Sandwich from "@/Components/Sandwich/Sandwich";
import Tasty_pancakes from "@/Components/Tasty pancakes/Tasty_pancakes";
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
      <section id="Tasty_pancakes">
        <Tasty_pancakes />
      </section>
      <section id="Breakfast">
        <Breakfast />
      </section>
      <section id="Sandwich">
        <Sandwich />
      </section>
    </main>
  );
}
