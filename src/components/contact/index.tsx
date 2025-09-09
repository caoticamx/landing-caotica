import Button from "../button";
import { Heading } from "../heading";
import Paragraph from "../paragraph";

export default function Contact() {
  return (
    <section
      className="contact py-24 backdrop-blur-md bg-[rgba(0,0,0,0.3)]"
      id="contacto"
    >
      <div className="container mx-auto my-0">
        <div className="max-width-[700px] my-0 mx-auto text-center">
          <Heading as="h2" variant="h2" className="h2">
            ¿Listo para comenzar?
          </Heading>
          <Paragraph>
            Cuéntanos sobre tu proyecto y te ayudaremos a convertir tu visión en
            realidad digital.
          </Paragraph>

          <form className="grid gap-8 mt-12">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                className="p-4 border border-[rgba(255,255,255,0.2)] rounded-[10px] bg-[rgba(255,255,255,0.05)] textt-white backdrop-blur-md text-base placeholder:text-[rgba(255,255,255,0.6)] focus:outline-0 focus:border focus:border-[#00d4ff]"
                type="text"
                placeholder="Nombre"
                required
              />
              <input
                className="p-4 border border-[rgba(255,255,255,0.2)] rounded-[10px] bg-[rgba(255,255,255,0.05)] textt-white backdrop-blur-md text-base placeholder:text-[rgba(255,255,255,0.6)] focus:outline-0 focus:border focus:border-[#00d4ff]"
                type="email"
                placeholder="Correo electrónico"
                required
              />
            </div>
            <div className="text-left">
              <Heading as="h4" variant="h4" className="h4">
                ¿Por qué quieres comunicarte con nosotros?
              </Heading>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <label>
                  <input
                    type="radio"
                    name="reason"
                    value="nuevo-proyecto"
                    required
                    className="peer absolute opacity-0 cursor-pointer"
                  />
                  <div className="reason-option">
                    <span className="checkmark w-10 h-10 flex items-center justify-center rounded-full text-xl mr-4 bg-[rgba(255,255,255,0.05)] transition-all duration-300">
                      🚀
                    </span>
                    <span className="reason-text font-medium ml-2 transition-colors duration-300 ease-in">
                      Nuevo Proyecto
                    </span>
                  </div>
                </label>
                <label>
                  <input
                    type="radio"
                    name="reason"
                    value="cotizacion"
                    required
                    className="peer absolute opacity-0 cursor-pointer"
                  />
                  <div className="reason-option">
                    <span className="checkmark w-10 h-10 flex items-center justify-center rounded-full text-xl mr-4 bg-[rgba(255,255,255,0.05)] transition-all duration-300">
                      💰
                    </span>
                    <span className="reason-text font-medium ml-2 transition-colors duration-300 ease-in">
                      Solicitar Cotización
                    </span>
                  </div>
                </label>
                <label>
                  <input
                    type="radio"
                    name="reason"
                    value="consultoria"
                    required
                    className="peer absolute opacity-0 cursor-pointer"
                  />
                  <div className="reason-option">
                    <span className="checkmark w-10 h-10 flex items-center justify-center rounded-full text-xl mr-4 bg-[rgba(255,255,255,0.05)] transition-all duration-300">
                      💡
                    </span>
                    <span className="reason-text font-medium ml-2 transition-colors duration-300 ease-in">
                      Consultoría Digital
                    </span>
                  </div>
                </label>
              </div>
            </div>

            <div className="text-center">
              <h4 className="text-xl mb-6 text-[#00d4ff] font-semibold">
                ¿Cómo prefieres que te contactemos?
              </h4>
              <div className="flex gap-4 justify-center">
                <button
                  type="button"
                  className="contact-button email-btn text-center"
                >
                  <span className="text-2xl">✉️</span>
                  <span className="text-xl">Email</span>
                </button>
                <button
                  type="button"
                  className="contact-button whatsapp-btn text-center"
                >
                  <span className="text-2xl">📱</span>
                  <span className="text-xl">WhatsApp</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
