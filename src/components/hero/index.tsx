import Button from "../button";
import { Heading } from "../heading";
import Paragraph from "../paragraph";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center text-center pt-18 pb-8"
      id="inicio"
    >
      <div className="container mx-auto my-0 px-5 z-10">
        <div>
          <Heading
            as="h1"
            variant="h1"
            className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-[#00d4ff] via-white to-[#9b59b6] bg-clip-text text-transparent animate-fadeInUp"
          >
            Transformamos Ideas en Experiencias Digitales
          </Heading>
          <Paragraph>
            Creamos sitios web modernos, aplicaciones innovadoras y soluciones
            digitales que impulsan tu negocio hacia el futuro.
          </Paragraph>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button href="#contacto" className="btn-primary">
              Comenzar Proyecto
            </Button>
            <Button href="#servicios" className="btn-secondary">
              Ver Servicios
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
