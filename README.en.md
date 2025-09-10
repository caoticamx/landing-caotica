# 🚀 Caótica - Landing Page

Modern landing page for Caótica digital agency, built with Next.js, TypeScript, and Tailwind CSS.

## 📋 Table of Contents

- [Features](#-features)
- [Technologies](#-technologies)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Development](#-development)
- [Docker](#-docker)
- [Deployment](#-deployment)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)

## ✨ Features

- 🎨 **Modern Design**: Attractive interface with glassmorphism effects
- 📱 **Responsive**: Optimized for all devices
- ⚡ **Performance**: Built with Next.js for maximum speed
- 🎯 **SEO Optimized**: Meta tags and semantic structure
- 📧 **Contact Form**: WhatsApp and Email integration
- 🐳 **Docker Ready**: Complete container configuration
- 🔒 **TypeScript**: Static typing for greater robustness

## 🛠 Technologies

- **Framework**: Next.js 15.5.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Linting**: ESLint with security configuration
- **Containers**: Docker & Docker Compose
- **Email**: EmailJS for contact forms

## 📋 Prerequisites

Before you begin, ensure you have installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

For Docker development:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/caoticamx/landing-caotica.git
   cd landing-caotica
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**

   ```bash
   cp .env.local.example .env.local
   ```

4. **Edit the `.env.local` file** with your values:

   ```env
   # WhatsApp number for contact
   NEXT_PUBLIC_WHATSAPP_NUMBER=521234567890

   # Contact email
   NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
   ```

## ⚙️ Configuration

### Required Environment Variables

| Variable                      | Description                         | Example               |
| ----------------------------- | ----------------------------------- | --------------------- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number (with country code) | `521234567890`        |
| `NEXT_PUBLIC_CONTACT_EMAIL`   | Company contact email               | `contact@caotica.com` |

### EmailJS Configuration (Optional)

If you want to use EmailJS for the contact form:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Configure your email service
3. Add additional environment variables:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## 🛠 Development

### Start the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build the application for production
npm run start        # Start production server

# Code quality
npm run lint         # Run ESLint to check code
```

### File structure

```
src/
├── components/          # Reusable components
│   ├── about/          # About section
│   ├── animation/      # Animation components
│   ├── button/         # Custom buttons
│   ├── contact/        # Contact form
│   ├── footer/         # Footer
│   ├── header/         # Header
│   ├── heading/        # Titles and headings
│   ├── hero/           # Main section
│   ├── paragraph/      # Paragraph component
│   └── services/       # Services section
├── lib/                # Utilities and configurations
├── pages/              # Next.js pages
│   ├── api/            # API routes
│   ├── _app.tsx        # Global app configuration
│   ├── _document.tsx   # HTML document configuration
│   └── index.tsx       # Main page
└── styles/             # Global styles
    └── globals.css     # Global CSS styles
```

## 🐳 Docker

### Development with Docker

```bash
# Build and run
docker-compose up --build

# Run in background
docker-compose up -d

# View logs
docker-compose logs -f caotica-site

# Stop containers
docker-compose down

# Rebuild without cache
docker-compose build --no-cache
```

The application will be available at [http://localhost:3001](http://localhost:3001).

### Container details

- **Container name**: `caotica-site`
- **Port**: 3001 (mapped to container port 3000)
- **Volumes**: Source code is mounted for live development
- **Network**: `caotica-network`

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to [Vercel](https://vercel.com/)
2. Configure environment variables in the Vercel dashboard
3. Deploy automatically on each push to the main branch

### Other platforms

The project is compatible with any platform that supports Next.js:

- **Netlify**: Use `npm run build` and `npm run start`
- **Railway**: Automatic configuration with Next.js
- **DigitalOcean App Platform**: Native Next.js support

### Environment variables in production

Make sure to configure the following variables in your deployment platform:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=521234567890
NEXT_PUBLIC_CONTACT_EMAIL=contact@caotica.com
```

## 📁 Project Structure

```
landing-caotica/
├── public/                 # Static files
├── src/                    # Source code
│   ├── components/         # React components
│   ├── lib/               # Utilities
│   ├── pages/             # Next.js pages
│   └── styles/            # Styles
├── .env.local             # Environment variables (local)
├── .env.local.example     # Environment variables example
├── docker-compose.yml     # Docker Compose configuration
├── Dockerfile             # Docker configuration
├── next.config.ts         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code standards

- Use TypeScript for all code
- Follow the configured ESLint rules
- Keep components small and reusable
- Document complex functions
- Use semantic commits

## 📄 License

This project is under the MIT License. See the `LICENSE` file for more details.

## 📞 Contact

**Caótica** - [@caoticamx](https://github.com/caoticamx)

- Website: [caotica.com](https://caotica.com)
- Email: contact@caotica.com

---

⭐ Don't forget to give the project a star if you like it!
