import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full backdrop-blur-md border-b border-white/10 z-[1000] transition-all duration-300 ease-in-out">
      <nav className="container mx-auto my-0 px-5 flex items-center justify-between py-3">
        <div className="text-[1.8rem] font-extrabold text-white">Caótica</div>
        <ul className="list-none gap-6 hidden sm:flex">
          <li>
            <Link className="item-menu" href="/#inicio">
              Inicio
            </Link>
          </li>
          <li>
            <Link className="item-menu" href="/#servicios">
              Servicios
            </Link>
          </li>
          <li>
            <Link className="item-menu" href="/#nosotros">
              Nosotros
            </Link>
          </li>
          <li>
            <Link className="item-menu" href="/#contacto">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
