import Animation from "@/components/animation";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import ItemPortfolio from "@/components/itemPortfolio";

export default function Portafolio() {
  return (
    <div className="font-sans min-h-screen text-white bg-[linear-gradient(135deg,#0f0f23_0%,#1a1a3a_50%,#2d1b69_100%)] overflow-x-hidden">
      <Animation />
      <Header />
      <main>
        <Hero
          title="Nuestros Proyectos"
          description="Explora nuestra colección de proyectos web innovadores. Cada proyecto es único y está diseñado para superar las expectativas de nuestros clientes."
        />
        <ItemPortfolio />
      </main>
      <Footer />
    </div>
  );
}
