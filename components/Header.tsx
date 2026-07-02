export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        <img
  src="/logo/logo.png"
  alt="RU2K2 SMART"
  className="h-20 md:h-34 w-auto object-contain"
  draggable={false}
        />

        <nav className="hidden md:flex gap-8 text-white font-semibold">
          <a href="#servicios" className="hover:text-blue-400">Servicios</a>
          <a href="#proyectos" className="hover:text-blue-400">Proyectos</a>
          <a href="#domotica" className="hover:text-blue-400">Domótica</a>
          <a href="#contacto" className="hover:text-blue-400">Contacto</a>
        </nav>

      </div>
    </header>
  );
}