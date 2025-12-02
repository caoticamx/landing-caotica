import Card from "../card";
import centroDigital from "@/assets/images/centro-digital.png";
import oye from "@/assets/images/oye.png";
import nutricial from "@/assets/images/nutricial.png";

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
          description="Sistema de diseño completo y dashboard de análisis de datos con visualizaciones interactivas. Mejora del 80% en UX según pruebas con usuarios."
        />
        <Card
          image={nutricial}
          title="Dashboard Analytics"
          description="Sistema de diseño completo y dashboard de análisis de datos con visualizaciones interactivas. Mejora del 80% en UX según pruebas con usuarios."
        />
      </div>
    </div>
  );
}
