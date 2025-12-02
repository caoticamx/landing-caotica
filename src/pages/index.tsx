import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Animation from "@/components/animation";

export default function Home() {
  return (
    <div className="font-sans min-h-screen text-white bg-[linear-gradient(135deg,#0f0f23_0%,#1a1a3a_50%,#2d1b69_100%)] overflow-x-hidden">
      <Animation />
      <Header />
      <main>
        <Hero
          title="Transformamos Ideas en Experiencias Digitales"
          description="Somos una agencia nueva con ideas frescas. Creamos sitios web modernos y aplicaciones que reflejan la esencia de tu marca a precios competitivos. Nuestra agencia es nueva, nuestros expertos no."
          buttonPrimary="Comenzar Proyecto"
          buttonSecondary="Ver Portafolio"
          hrefPrimary="#contacto"
          hrefSecondary="/portafolio"
        />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
