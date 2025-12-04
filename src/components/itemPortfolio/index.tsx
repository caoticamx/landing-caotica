import Card from "../card";
import centroDigital from "@/assets/images/centro-digital.png";
import oye from "@/assets/images/oye.png";

export default function ItemPortfolio() {
  return (
    <div className="container mx-auto my-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 px-4 sm:px-6 md:px-8 lg-0">
        <Card
          image={centroDigital}
          title="Dashboard Analytics"
          description="Sistema de diseño completo y dashboard de análisis de datos con visualizaciones interactivas. Mejora del 80% en UX según pruebas con usuarios."
        />
        <Card
          image={oye}
          title="Dashboard Analytics"
          description="OYE es una plataforma de bienestar emocional enfocada en salud mental, bienestar emocional, meditación, yoga, autoexploración y transformación personal. En Caótica colaboramos en la creación, puesta en producción y mantenimiento de OYE: optimizamos su infraestructura, desarrollamos la experiencia digital y garantizamos su estabilidad. Utilizamos WordPress para administrar contenido, Tailwind CSS para construir una interfaz moderna, ligera y escalable, y Cloudways para gestionar hosting de alto desempeño y asegurar tiempos de carga rápidos. El resultado: una plataforma confiable, elegante y lista para acompañar a sus usuarios en su camino de bienestar emocional."
        />
      </div>
    </div>
  );
}
