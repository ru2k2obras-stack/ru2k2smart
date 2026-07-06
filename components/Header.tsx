"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";

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

        <a href="#inicio" className="mr-8">
          <img
            src="/logo/logo.png"
            alt="RU2K2 SMART"
            draggable={false}
            className={`transition-all duration-500 object-contain
              ${scrolled ? "h-16" : "h-20"}
              hover:scale-110`}
          />
        </a>

        {/* MENU */}

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

        {/* DERECHA */}

        <div className="hidden xl:flex items-center gap-3">

          {/* BUSCADOR */}

<div className="relative">

  <Search
    size={18}
    className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300 pointer-events-none"
  />

  <input
    type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    onKeyDown={(e) => e.key === "Enter" && buscar()}
    placeholder="Buscar..."
    className="
      w-44
      focus:w-72
      transition-all
      duration-300
      bg-white/5
      border
      border-cyan-500/20
      rounded-full
      pl-11
      pr-4
      py-2
      text-sm
      text-white
      placeholder:text-gray-400
      backdrop-blur-xl
      outline-none
      focus:border-cyan-400
      focus:shadow-[0_0_18px_rgba(34,211,238,.45)]
    "
  />

  {search !== "" && sugerencias.length > 0 && (
    <div className="absolute top-12 left-0 w-full rounded-xl bg-[#0b1724] border border-cyan-500/30 shadow-2xl overflow-hidden z-50">
      {sugerencias.map((item) => (
        <button
          key={item.texto}
          onClick={() => {
            setSearch(item.texto);
            document
              .getElementById(item.id)
              ?.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
          className="w-full px-4 py-3 text-left text-white hover:bg-cyan-500/20 transition"
        >
          {item.texto}
        </button>
      ))}
    </div>
  )}

</div>

          {/* BOTON */}

          <a
            href="#contacto"
            className="px-4 py-2 rounded-full border border-cyan-400/30 text-cyan-300 text-xs font-semibold bg-cyan-500/5 hover:bg-cyan-500/15 transition-all duration-300 hover:shadow-lg"
          >
            Solicitar Cotizaciones
          </a>

        </div>

      </div>

      {/* Línea inferior */}

      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"></div>

    </header>
  );
}