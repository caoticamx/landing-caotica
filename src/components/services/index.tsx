import { Heading } from "../heading";
import Paragraph from "../paragraph";

export default function Services() {
  return (
    <section
      className="py-24 bg-[rgba(0,0,0,0.3)] backdrop-blur-md px-4 sm:px-0"
      id="servicios"
    >
      <div className="container mx-auto my-0">
        <Heading as="h2" variant="h2" className="h2">
          Nuestros Servicios
        </Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
          <div className="service-card">
            <div className="service-icon">🌐</div>
            <Heading as="h3" variant="h3" className="h3">
              Desarrollo Web
            </Heading>
            <Paragraph>
              Sitios web responsivos y modernos utilizando las últimas
              tecnologías como React, Vue.js y Node.js.
            </Paragraph>
          </div>
          <div className="service-card">
            <div className="service-icon">📱</div>
            <Heading as="h3" variant="h3" className="h3">
              Apps Móviles
            </Heading>
            <Paragraph>
              Aplicaciones nativas e híbridas para iOS y Android que ofrecen una
              experiencia de usuario excepcional.
            </Paragraph>
          </div>
          <div className="service-card">
            <div className="service-icon">🎨</div>
            <Heading as="h3" variant="h3" className="h3">
              UI/UX Design
            </Heading>
            <Paragraph>
              Diseños intuitivos y atractivos que mejoran la experiencia del
              usuario y aumentan las conversiones.
            </Paragraph>
          </div>
          <div className="service-card">
            <div className="service-icon">⚡</div>
            <Heading as="h3" variant="h3" className="h3">
              Optimización
            </Heading>
            <Paragraph>
              Optimizamos la velocidad, SEO y rendimiento de tu sitio para
              mejorar su visibilidad y efectividad online.
            </Paragraph>
          </div>
          <div className="service-card">
            <div className="service-icon">🔧</div>
            <Heading as="h3" variant="h3" className="h3">
              Mantenimiento
            </Heading>
            <Paragraph>
              Soporte técnico continuo, actualizaciones y monitoreo para
              mantener tu proyecto funcionando sin problemas.
            </Paragraph>
          </div>
          <div className="service-card">
            <div className="service-icon">🚀</div>
            <Heading as="h3" variant="h3" className="h3">
              Consultoría Digital
            </Heading>
            <Paragraph>
              Estrategias digitales personalizadas y asesoramiento para hacer
              crecer tu presencia online de manera efectiva.
            </Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
}
