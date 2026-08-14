export default function Architecture() {
  return (
    <section
      id="architecture"
      className="
        relative
        overflow-hidden
        py-36
        px-6
        lg:px-8
        bg-gradient-to-br
        from-black
        via-slate-900
        to-cyan-900
      "
    >
      {/* Degradado principal */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-cyan-900" />

      {/* Halo superior izquierdo */}
      <div className="absolute -top-52 -left-44 w-[700px] h-[700px] rounded-full bg-cyan-500/20 blur-[180px]" />

      {/* Halo inferior derecho */}
      <div className="absolute -bottom-52 -right-44 w-[700px] h-[700px] rounded-full bg-blue-600/20 blur-[180px]" />

      {/* Degradado extra para profundidad */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-cyan-500/15" />

      {/* Patrón tecnológico */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#38bdf8_1px,transparent_1px)] bg-[length:38px_38px]" />

      {/* Contenido */}
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* Texto */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            TRABAJAMOS PROYECTOS INTEGRALES.
          </h2>

          <p className="text-white/90 text-lg leading-8 mb-10 text-justify">
            Creamos proyectos de espacios modernos, funcionales y preparados
            para la eficiencia energética y la automatización desde el primer
            día, integrando arquitectura, diseño y tecnología en una única
            solución.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-full font-semibold text-white shadow-xl">
              Pedir Cotización
            </button>

            <button className="border border-white/30 hover:bg-white hover:text-slate-900 text-white transition px-8 py-4 rounded-full">
              Portfolio
            </button>
          </div>
        </div>

        {/* Imagen */}
        <div className="relative group rounded-3xl overflow-hidden shadow-2xl">

          <img
            src="/images/arquitectura-premium.jpg"
            alt="Arquitectura Premium"
            className="
              w-full
              h-[500px]
              object-cover
              transition-all
              duration-700
              group-hover:scale-110
              brightness-110
              contrast-110
              saturate-125
            "
          />

          {/* Brillo */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/20" />

          {/* Reflejo */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
            <div className="absolute -left-40 top-0 h-full w-24 rotate-12 bg-white/30 blur-xl"></div>
          </div>

          {/* Texto */}
          <div className="absolute bottom-8 left-8">
            <h3 className="text-4xl font-bold text-white drop-shadow-xl">
              Arquitectura
            </h3>

            <p className="text-white/90 text-lg mt-2">
              Arte & Diseño
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}