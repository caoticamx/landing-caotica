import ContactForm from "../form";
import { Heading } from "../heading";
import Paragraph from "../paragraph";

export default function Contact() {
  return (
    <section
      className="contact py-24 px-4 sm:px-0 backdrop-blur-md bg-[rgba(0,0,0,0.3)]"
      id="contacto"
    >
      <div className="container mx-auto my-0">
        <div className="max-width-[700px] my-0 mx-auto text-center">
          <Heading as="h2" variant="h2" className="h2">
            ¿Tienes una idea?
          </Heading>
          <Paragraph>
            Hablemos. Como agencia nueva, ofrecemos precios competitivos y
            atención personalizada para hacer realidad tu proyecto digital.
          </Paragraph>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
