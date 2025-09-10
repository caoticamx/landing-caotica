# 🚀 Caótica - Landing Page

Landing page moderna para la agencia digital Caótica, construida con Next.js, TypeScript y Tailwind CSS.

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Prerrequisitos](#-prerrequisitos)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Desarrollo](#-desarrollo)
- [Docker](#-docker)
- [Despliegue](#-despliegue)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Contribuir](#-contribuir)

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz atractiva con efectos de glassmorphism
- 📱 **Responsive**: Optimizado para todos los dispositivos
- ⚡ **Rendimiento**: Construido con Next.js para máxima velocidad
- 🎯 **SEO Optimizado**: Meta tags y estructura semántica
- 📧 **Formulario de Contacto**: Integración con WhatsApp y Email
- 🐳 **Docker Ready**: Configuración completa para contenedores
- 🔒 **TypeScript**: Tipado estático para mayor robustez

## 🛠 Tecnologías

- **Framework**: Next.js 15.5.2
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS 4
- **Linting**: ESLint con configuración de seguridad
- **Contenedores**: Docker & Docker Compose
- **Email**: EmailJS para formularios de contacto

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

Para desarrollo con Docker:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## 🚀 Instalación

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/caoticamx/landing-caotica.git
   cd landing-caotica
   ```

2. **Instala las dependencias**

   ```bash
   npm install
   # o
   yarn install
   ```

3. **Configura las variables de entorno**

   ```bash
   cp .env.local.example .env.local
   ```

4. **Edita el archivo `.env.local`** con tus valores:

   ```env
   # Número de WhatsApp para contacto
   NEXT_PUBLIC_WHATSAPP_NUMBER=521234567890

   # Email de contacto
   NEXT_PUBLIC_CONTACT_EMAIL=tu-email@ejemplo.com
   ```

## ⚙️ Configuración

### Variables de Entorno Requeridas

| Variable                      | Descripción                             | Ejemplo                |
| ----------------------------- | --------------------------------------- | ---------------------- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número de WhatsApp (con código de país) | `521234567890`         |
| `NEXT_PUBLIC_CONTACT_EMAIL`   | Email de contacto de la empresa         | `contacto@caotica.com` |

### Configuración de EmailJS (Opcional)

Si deseas usar EmailJS para el formulario de contacto:

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Configura tu servicio de email
3. Agrega las variables de entorno adicionales:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
   ```

## 🛠 Desarrollo

### Iniciar el servidor de desarrollo

```bash
npm run dev
# o
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

### Scripts disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo

# Producción
npm run build        # Construye la aplicación para producción
npm run start        # Inicia el servidor de producción

# Calidad de código
npm run lint         # Ejecuta ESLint para verificar el código
```

### Estructura de archivos

```
src/
├── components/          # Componentes reutilizables
│   ├── about/          # Sección "Acerca de"
│   ├── animation/      # Componentes de animación
│   ├── button/         # Botones personalizados
│   ├── contact/        # Formulario de contacto
│   ├── footer/         # Pie de página
│   ├── header/         # Encabezado
│   ├── heading/        # Títulos y encabezados
│   ├── hero/           # Sección principal
│   ├── paragraph/      # Componente de párrafos
│   └── services/       # Sección de servicios
├── lib/                # Utilidades y configuraciones
├── pages/              # Páginas de Next.js
│   ├── api/            # API routes
│   ├── _app.tsx        # Configuración global de la app
│   ├── _document.tsx   # Configuración del documento HTML
│   └── index.tsx       # Página principal
└── styles/             # Estilos globales
    └── globals.css     # Estilos CSS globales
```

## 🐳 Docker

### Desarrollo con Docker

```bash
# Construir y ejecutar
docker-compose up --build

# Ejecutar en segundo plano
docker-compose up -d

# Ver logs
docker-compose logs -f caotica-site

# Detener contenedores
docker-compose down

# Reconstruir sin caché
docker-compose build --no-cache
```

La aplicación estará disponible en [http://localhost:3001](http://localhost:3001).

### Detalles del contenedor

- **Nombre del contenedor**: `caotica-site`
- **Puerto**: 3001 (mapeado al puerto 3000 del contenedor)
- **Volúmenes**: El código fuente está montado para desarrollo en vivo
- **Red**: `caotica-network`

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a [Vercel](https://vercel.com/)
2. Configura las variables de entorno en el dashboard de Vercel
3. Despliega automáticamente en cada push a la rama principal

### Otras plataformas

El proyecto es compatible con cualquier plataforma que soporte Next.js:

- **Netlify**: Usa `npm run build` y `npm run start`
- **Railway**: Configuración automática con Next.js
- **DigitalOcean App Platform**: Soporte nativo para Next.js

### Variables de entorno en producción

Asegúrate de configurar las siguientes variables en tu plataforma de despliegue:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=521234567890
NEXT_PUBLIC_CONTACT_EMAIL=contacto@caotica.com
```

## 📁 Estructura del Proyecto

```
landing-caotica/
├── public/                 # Archivos estáticos
├── src/                    # Código fuente
│   ├── components/         # Componentes React
│   ├── lib/               # Utilidades
│   ├── pages/             # Páginas de Next.js
│   └── styles/            # Estilos
├── .env.local             # Variables de entorno (local)
├── .env.local.example     # Ejemplo de variables de entorno
├── docker-compose.yml     # Configuración de Docker Compose
├── Dockerfile             # Configuración de Docker
├── next.config.ts         # Configuración de Next.js
├── tailwind.config.js     # Configuración de Tailwind CSS
├── tsconfig.json          # Configuración de TypeScript
└── package.json           # Dependencias y scripts
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Estándares de código

- Usa TypeScript para todo el código
- Sigue las reglas de ESLint configuradas
- Mantén los componentes pequeños y reutilizables
- Documenta funciones complejas
- Usa commits semánticos

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

**Caótica** - [@caoticamx](https://github.com/caoticamx)

- Website: [caotica.com](https://caotica.com)
- Email: contacto@caotica.com

---

⭐ ¡No olvides darle una estrella al proyecto si te gusta!
