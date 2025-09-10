import { Heading } from "../heading";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  reason: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    reason: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  // Configuración
  const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";

  // Validación de formulario
  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un correo electrónico válido";
    }

    if (!formData.reason) {
      newErrors.reason = "Selecciona un motivo de contacto";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejo de cambios en inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Manejo de selección de motivo
  const handleReasonChange = (value: string) => {
    setFormData((prev) => ({ ...prev, reason: value }));
    if (errors.reason) {
      setErrors((prev) => ({ ...prev, reason: undefined }));
    }
  };

  // Generar mensaje para WhatsApp
  const generateWhatsAppMessage = (): string => {
    const reasonText = {
      "nuevo-proyecto": "Nuevo Proyecto",
      cotizacion: "Solicitar Cotización",
      consultoria: "Consultoría Digital",
    };

    return `¡Hola! Me llamo ${
      formData.name
    } y me gustaría contactar con Caótica.
    
    📧 Email: ${formData.email}
    🎯 Motivo: ${reasonText[formData.reason as keyof typeof reasonText]}
    
    ¿Podrían contactarme para hablar sobre mi proyecto?`;
  };

  // Generar mensaje para Email
  const generateEmailMessage = (): string => {
    const reasonText = {
      "nuevo-proyecto": "Nuevo Proyecto",
      cotizacion: "Solicitar Cotización",
      consultoria: "Consultoría Digital",
    };

    return `Hola equipo de Caótica,
    
    Mi nombre es ${formData.name} y me gustaría contactar con ustedes.
    
    📧 Email: ${formData.email}
    🎯 Motivo: ${reasonText[formData.reason as keyof typeof reasonText]}
    
    Me interesa conocer más sobre sus servicios y cómo pueden ayudarme con mi proyecto.
    
    ¡Espero su respuesta!
    
    Saludos,
    ${formData.name}`;
  };

  // Manejo de envío directo
  const handleDirectSubmit = async (method: string) => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    if (method === "email") {
      // Usar mailto con CC para envío directo
      const subject = encodeURIComponent(
        `Consulta desde Caótica - ${formData.name}`
      );
      const body = encodeURIComponent(generateEmailMessage());
      const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}&cc=${formData.email}`;
      window.open(mailtoLink);
      setSuccessMessage(
        "✅ Se abrió tu cliente de email. El mensaje está pre-llenado y se enviará una copia al cliente automáticamente."
      );
    } else if (method === "whatsapp") {
      const message = encodeURIComponent(generateWhatsAppMessage());
      const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
      window.open(whatsappLink, "_blank");
      setSuccessMessage(
        "📱 Se abrió WhatsApp con tu mensaje pre-llenado. ¡Envíalo para contactarnos!"
      );
    }

    // Reset form after a delay
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        reason: "",
      });
      setIsSubmitting(false);
      setSuccessMessage(""); // Limpiar mensaje de éxito
    }, 1000);
  };
  return (
    <>
      {successMessage && (
        <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg backdrop-blur-md">
          <p className="text-green-300 text-sm font-medium">{successMessage}</p>
        </div>
      )}
      <form className="grid gap-8 mt-12">
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="p-4 border border-[rgba(255,255,255,0.2)] rounded-[10px] bg-[rgba(255,255,255,0.05)] textt-white backdrop-blur-md text-base placeholder:text-[rgba(255,255,255,0.6)] focus:outline-0 focus:border focus:border-[#00d4ff]"
            type="text"
            placeholder="Nombre"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleInputChange}
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
                checked={formData.reason === "nuevo-proyecto"}
                onChange={() => handleReasonChange("nuevo-proyecto")}
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
                checked={formData.reason === "cotizacion"}
                onChange={() => handleReasonChange("cotizacion")}
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
                checked={formData.reason === "consultoria"}
                onChange={() => handleReasonChange("consultoria")}
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
              onClick={() => handleDirectSubmit("email")}
              disabled={isSubmitting}
              className="contact-button email-btn text-center"
            >
              <span className="text-2xl">✉️</span>
              <span className="text-xl">
                {isSubmitting ? "Enviando..." : "Email"}
              </span>
            </button>
            <button
              type="button"
              onClick={() => handleDirectSubmit("whatsapp")}
              disabled={isSubmitting}
              className="contact-button whatsapp-btn text-center"
            >
              <span className="text-2xl">📱</span>
              <span className="text-xl">
                {isSubmitting ? "Enviando..." : "WhatsApp"}
              </span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
