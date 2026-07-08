"use client";

import { useEffect, useState } from "react";
import { Search, Menu } from "lucide-react";

const datosBusqueda = [
  { texto: "Arquitectura", id: "servicios" },
  { texto: "Ingeniería", id: "servicios" },
  { texto: "Nuevos Proyectos", id: "servicios" },
  { texto: "Innovación", id: "servicios" },
  { texto: "Consultoría", id: "servicios" },
  { texto: "Domótica", id: "domotica" },
  { texto: "Seguridad", id: "domotica" },
  { texto: "Tienda Tech", id: "tienda" },
  { texto: "Casa Lista", id: "casalista" },
  { texto: "Propiedades Smart", id: "propiedades" },
  { texto: "Contacto", id: "contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const sugerencias = datosBusqueda.filter((item) =>
  item.texto.toLowerCase().includes(search.toLowerCase())
);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const buscar = () => {
  if (!search.trim()) return;

  const texto = search.toLowerCase();
  const elementos = document.querySelectorAll("section");

  for (const elemento of elementos) {
    if (elemento.textContent?.toLowerCase().includes(texto)) {
      elemento.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      elemento.classList.add("ring-4", "ring-cyan-400");

      setTimeout(() => {
        elemento.classList.remove("ring-4", "ring-cyan-400");
      }, 2500);

      return;
    }
  }
};

  const menu = [
    { nombre: "Inicio", link: "#inicio" },
    { nombre: "Servicios", link: "#servicios" },
    { nombre: "Nosotros", link: "#nosotros" },
    { nombre: "Domótica", link: "#domotica" },
    { nombre: "Tienda Tech", link: "#tienda" },
    { nombre: "Propiedades Smart", link: "#propiedadessmart" },
    { nombre: "Contacto", link: "#contacto" },
  ];

  return (
    <header
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    scrolled
      ? "bg-black/85 backdrop-blur-xl shadow-2xl border-b border-cyan-500/20"
      : "bg-black/35 backdrop-blur-md"
  }`}
>
  <div className="max-w-[1700px] mx-auto flex items-center justify-between px-4 lg:px-8">

  {/* LOGO */}
  <a href="#inicio">
    <img
      src="/logo/logo.png"
      alt="RU2K2 SMART"
      draggable={false}
      className={`transition-all duration-500 object-contain ${
        scrolled ? "h-16" : "h-20"
      } hover:scale-110`}
    />
  </a>

  {/* MENÚ PC */}
  <nav className="hidden xl:flex items-center gap-1 flex-1 justify-center">
    {menu.map((item) => (
      <a
        key={item.nombre}
        href={item.link}
        className="group relative px-4 py-4 text-white font-medium transition-all duration-300 hover:text-cyan-300"
      >
        {item.nombre}
        <span className="absolute bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-gray-300 via-white to-cyan-400 transition-all duration-300 group-hover:w-9"></span>
      </a>
    ))}
  </nav>

  {/* DERECHA PC */}
  <div className="hidden xl:flex items-center gap-3">

    {/* Aquí va TODO tu buscador completo */}

    <a
      href="#contacto"
      className="px-4 py-2 rounded-full border border-cyan-400/30 text-cyan-300 text-xs font-semibold bg-cyan-500/5 hover:bg-cyan-500/15 transition-all duration-300 hover:shadow-lg"
    >
      Solicitar Cotizaciones
    </a>

  </div>

  {/* BOTÓN CELULAR */}
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="xl:hidden text-white"
  >
    <Menu size={30} />
  </button>

</div>

  <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"></div>

  {menuOpen && (
  <div className="xl:hidden bg-[#07131d]/95 backdrop-blur-xl border-t border-cyan-500/20">

    {menu.map((item) => (
      <a
        key={item.nombre}
        href={item.link}
        onClick={() => setMenuOpen(false)}
        className="block px-6 py-4 text-white border-b border-white/10 hover:bg-cyan-500/10"
      >
        {item.nombre}
      </a>
    ))}

    <div className="p-5">
      <a
        href="#contacto"
        onClick={() => setMenuOpen(false)}
        className="block text-center rounded-full bg-cyan-500 py-3 font-semibold text-white"
      >
        Solicitar Cotización
      </a>
    </div>

  </div>
)}
</header>
  );
}