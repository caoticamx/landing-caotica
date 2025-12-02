import Card from "../card";
import { Heading } from "../heading";

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
          <Card
            icon="🌐"
            title="Desarrollo Web"
            description="Sitios web responsivos y modernos utilizando las últimas tecnologías como React, Vue.js y Node.js."
          />
          <Card
            icon="📱"
            title="Apps Móviles"
            description="Aplicaciones nativas e híbridas para iOS y Android que ofrecen una experiencia de usuario excepcional."
          />
          <Card
            icon="🎨"
            title="UI/UX Design"
            description="Diseños intuitivos y atractivos que mejoran la experiencia del usuario y aumentan las conversiones."
          />
          <Card
            icon="⚡"
            title="Optimización"
            description="Optimizamos la velocidad, SEO y rendimiento de tu sitio para mejorar su visibilidad y efectividad online."
          />
          <Card
            icon="🔧"
            title="Mantenimiento"
            description="Soporte técnico continuo, actualizaciones y monitoreo para mantener tu proyecto funcionando sin problemas."
          />
          <Card
            icon="🚀"
            title="Consultoría Digital"
            description="Estrategias digitales personalizadas y asesoramiento para hacer crecer tu presencia online de manera efectiva."
          />
        </div>
      </div>
    </section>
  );
}
