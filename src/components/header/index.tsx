import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full backdrop-blur-md border-b border-white/10 z-[1000] transition-all duration-300 ease-in-out">
      <nav className="container mx-auto my-0 px-5 flex items-center justify-between py-3">
        <div className="text-[1.8rem] font-extrabold text-white">Caótica</div>
        <ul className="list-none gap-6 hidden sm:flex">
          <li>
            <Link
              className="relative text-white no-underline font-medium transition-colors duration-300 ease-in-out hover:text-[#00d4ff]
           after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
           after:bg-gradient-to-r after:from-[#00d4ff] after:to-[#9b59b6] after:transition-all after:duration-300 after:ease-in-out
           hover:after:w-full"
              href="#inicio"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              className="relative text-white no-underline font-medium transition-colors duration-300 ease-in-out hover:text-[#00d4ff]
           after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
           after:bg-gradient-to-r after:from-[#00d4ff] after:to-[#9b59b6] after:transition-all after:duration-300 after:ease-in-out
           hover:after:w-full"
              href="#servicios"
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              className="relative text-white no-underline font-medium transition-colors duration-300 ease-in-out hover:text-[#00d4ff]
           after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
           after:bg-gradient-to-r after:from-[#00d4ff] after:to-[#9b59b6] after:transition-all after:duration-300 after:ease-in-out
           hover:after:w-full"
              href="#nosotros"
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              className="relative text-white no-underline font-medium transition-colors duration-300 ease-in-out hover:text-[#00d4ff]
           after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
           after:bg-gradient-to-r after:from-[#00d4ff] after:to-[#9b59b6] after:transition-all after:duration-300 after:ease-in-out
           hover:after:w-full"
              href="#contacto"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
