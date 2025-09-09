# Configuración de EmailJS para el Formulario de Contacto

## Pasos para configurar EmailJS:

### 1. Crear cuenta en EmailJS

- Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
- Crea una cuenta gratuita

### 2. Configurar el servicio de email

- En el dashboard, ve a "Email Services"
- Agrega un nuevo servicio (Gmail, Outlook, etc.)
- Configura tu email: `emmanuelle.laguna@gmail.com`

### 3. Crear template de email

- Ve a "Email Templates"
- Crea un nuevo template con el siguiente contenido:

**Subject:**

```
Nueva consulta desde Caótica - {{from_name}}
```

**Body:**

```
Hola,

Has recibido una nueva consulta desde el sitio web de Caótica:

Nombre: {{from_name}}
Email: {{from_email}}
Motivo: {{reason}}

Mensaje:
{{message}}

---
Este email fue enviado automáticamente desde el formulario de contacto de Caótica.
```

### 4. Configurar variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto con:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
NEXT_PUBLIC_WHATSAPP_NUMBER=521234567890
```

### 5. Obtener las credenciales

- **Service ID**: En "Email Services" → tu servicio
- **Template ID**: En "Email Templates" → tu template
- **Public Key**: En "Account" → API Keys

### 6. Configurar el template para copia al cliente

En el template de EmailJS, agrega en el campo "To Email":

```
{{to_email}}, {{client_email}}
```

Esto enviará el email tanto a `emmanuelle.laguna@gmail.com` como al cliente.

## Funcionalidad implementada:

- ✅ Envío automático de email a `emmanuelle.laguna@gmail.com`
- ✅ Copia automática al cliente
- ✅ Template personalizado con datos del formulario
- ✅ Manejo de errores
- ✅ Feedback al usuario
- ✅ **Fallback automático**: Si EmailJS no está configurado, usa mailto con CC

## Modo Fallback:

Si EmailJS no está configurado, el formulario automáticamente:

1. Abre el cliente de email del usuario
2. Pre-llena el asunto y mensaje
3. Configura `emmanuelle.laguna@gmail.com` como destinatario
4. Agrega el email del cliente como CC (copia)
5. Muestra instrucciones al usuario

Esto asegura que el formulario siempre funcione, incluso sin configuración de EmailJS.
