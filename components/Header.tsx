"use client";

import { useEffect, useState } from "react";
import { Search, Menu, X } from "lucide-react";

const datosBusqueda = [
  { texto: "Arquitectura", id: "servicios" },
  { texto: "Ingeniería", id: "servicios" },
  { texto: "Domótica", id: "domotica" },
  { texto: "Tienda Tech", id: "tienda" },
  { texto: "Propiedades Smart", id: "propiedadessmart" },
  { texto: "Contacto", id: "contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sugerencias = datosBusqueda.filter((item) =>
    item.texto.toLowerCase().includes(search.toLowerCase())
  );

  const menu = [
    { nombre: "Inicio", link: "#inicio" },
    { nombre: "Servicios", link: "#servicios" },
    { nombre: "Nosotros", link: "#nosotros" },
    { nombre: "Domótica", link: "#domotica" },
    { nombre: "Tienda Tech", link: "#tienda" },
    { nombre: "Propiedades", link: "#propiedadessmart" },
    { nombre: "Contacto", link: "#contacto" },
  ];

  return (
  <header
    className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled
        ? "bg-black/85 backdrop-blur-xl"
        : "bg-black/35 backdrop-blur-md"
    }`}
  >
    <div className="max-w-7xl mx-auto flex items-center justify-between px-5 h-20">

      {/* LOGO */}
      <a href="#inicio">
        <img
          src="/logo/logo.png"
          alt="RU2K2 SMART"
          className={`transition-all ${scrolled ? "h-14" : "h-16"}`}
        />
      </a>

      {/* MENÚ */}
      <nav className="hidden xl:flex gap-8">
        {menu.map((item) => (
          <a
            key={item.nombre}
            href={item.link}
            className="text-white hover:text-cyan-300 transition"
          >
            {item.nombre}
          </a>
        ))}
      </nav>

      {/* DERECHA */}
      <div className="flex items-center gap-4">

        {/* BUSCADOR ESCRITORIO */}
        <div className="relative hidden xl:block">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar..."
            className="w-44 focus:w-72 transition-all duration-300 bg-white/10 border border-cyan-500/20 rounded-full pl-11 pr-4 py-2 text-white placeholder:text-gray-400 outline-none"
          />

          {search !== "" && sugerencias.length > 0 && (
            <div className="absolute top-12 left-0 w-full rounded-xl bg-[#0b1724] border border-cyan-500/30 shadow-2xl overflow-hidden">

              {sugerencias.map((item) => (
                <button
                  key={item.texto}
                  onClick={() => {
                    setSearch("");
                    document
                      .getElementById(item.id)
                      ?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                  }}
                  className="block w-full px-4 py-3 text-left text-white hover:bg-cyan-500/20"
                >
                  {item.texto}
                </button>
              ))}

            </div>
          )}
        </div>

        {/* BOTÓN ESCRITORIO */}
        <a
          href="#contacto"
          className="hidden xl:block px-6 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 transition text-white font-semibold"
        >
          Solicitar Cotización
        </a>

        {/* HAMBURGUESA */}
        <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="xl:hidden text-white p-2 hover:text-cyan-300 transition"
>
  {menuOpen ? <X size={32} /> : <Menu size={32} />}
</button>

      </div>

    </div>

    {/* MENÚ DESPLEGABLE */}
    {menuOpen && (
  <div className="absolute top-full right-4 mt-3 w-[92vw] max-w-sm rounded-2xl bg-[#07131d]/95 backdrop-blur-xl border border-cyan-500/20 shadow-2xl overflow-hidden">
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

          <div className="relative mb-4">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar..."
              className="w-full rounded-full bg-white/10 border border-cyan-500/20 pl-11 pr-4 py-3 text-white placeholder:text-gray-400 outline-none"
            />

          </div>

          <a
  href="#contacto"
  className="
    hidden xl:flex
    items-center
    justify-center
    h-10
    px-5
    rounded-full
    border
    border-white/15
    bg-white/5
    text-white
    text-sm
    font-medium
    transition-all
    duration-300
    backdrop-blur-xl
    hover:border-cyan-400/40
    hover:bg-cyan-500/10
    hover:text-cyan-300
  "
>
  Solicitar Cotización
</a>

        </div>

      </div>
    )}

  </header>
  );
}