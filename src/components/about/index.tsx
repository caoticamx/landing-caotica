import { Heading } from "../heading";
import Paragraph from "../paragraph";

export default function About() {
  return (
    <section className="py-24 px-4 sm:px-0" id="nosotros">
      <div className="container mx-auto my-0">
        <div className="grid gap-16 items-center grid-cols-1 md:grid-cols-2">
          <div className="about-text">
            <Heading as="h2" variant="h2" className="h2">
              ¿Por qué elegirnos?
            </Heading>
            <Paragraph>
              Somos un equipo apasionado de desarrolladores y diseñadores
              especializados en crear soluciones digitales que marcan la
              diferencia.
            </Paragraph>
            <Paragraph>
              Combinamos creatividad, tecnología de vanguardia y estrategia de
              negocio para entregar proyectos que superan las expectativas de
              nuestros clientes.
            </Paragraph>
            <Paragraph>
              Nuestro enfoque centrado en la calidad y metodología ágil nos
              permite crear productos digitales que realmente funcionan, sin
              importar el tamaño de tu proyecto.
            </Paragraph>
          </div>
          <div className="grid grid-cols-2 gap-4 opacity-90">
            <div className="stat">
              <div className="stat-number">+50</div>
              <div>Proyectos Completados</div>
            </div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div>Compromiso con Calidad</div>
            </div>
            <div className="stat">
              <div className="stat-number">2022</div>
              <div>Año de Fundación</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div>Atención Personalizada</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
