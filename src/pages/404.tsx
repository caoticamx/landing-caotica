import Footer from "@/components/footer";
import ContactForm from "@/components/form";
import Header from "@/components/header";
import { Heading } from "@/components/heading";
import Paragraph from "@/components/paragraph";

export default function Custom404() {
  return (
    <div className="font-sans min-h-screen text-white bg-[linear-gradient(135deg,#0f0f23_0%,#1a1a3a_50%,#2d1b69_100%)] overflow-x-hidden">
      <Header />
      <main className="py-24">
        <Heading as="h2" variant="h2" className="h2">
          ¿Te perdiste?
        </Heading>
        <Paragraph>
          Te ayudamos a encontrar lo que buscas. Contáctanos
        </Paragraph>
        <section className="container mx-auto my-0">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}
