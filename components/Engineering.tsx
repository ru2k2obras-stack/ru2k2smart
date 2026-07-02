export default function Engineering() {
  return (
    <section
      id="ingenieria"
      className="relative py-24 px-8 overflow-hidden bg-gradient-to-br from-blue-100 via-gray-200 to-slate-800 text-white"
    >
      {/* Fondo */}
      <div className="absolute inset-50 opacity-10 bg-[radial-gradient(circle_at_center,#60a5fa_1px,transparent_1px)] bg-[length:35px_35px]" />
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Imagen */}
        <div className="relative group rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
          <img
            src="/images/ingenieria-premium.jpg"
            alt="Ingeniería"
            className="
              w-full
              h-[500px]
              object-cover
              transition-all
              duration-700
              group-hover:scale-110
              brightness-110
              contrast-125
              saturate-125
            "
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-cyan-300/20"></div>
          <div className="absolute inset-0 rounded-3xl border border-white/20"></div>
          <div className="absolute bottom-8 left-8">
            <h3 className="text-5xl font-bold drop-shadow-2xl">
              Ingeniería
            </h3>
            <p className="text-blue-200 text-xl italic">
           
            </p>
          </div>
        </div>
        {/* Texto */}
        <div className="order-1 lg:order-2">
          <h2 className="text-5xl md:text-6xl font-light leading-tight mb-8">
           
            <br />
            <span className="italic font-serif text-blue-900">
          
            </span>
          </h2>
          <h3 className="text-2xl font-bold mb-10">
            SOLUCIONES TÉCNICAS Y DOCUMENTACIÓN PROFESIONAL.
          </h3>
          <p className="text-black text-lg leading-8 mb-10">
            Diseñamos soluciones de ingeniería integrales para edificios,
            industrias, desarrollos inmobiliarios y proyectos tecnológicos,
            incorporando eficiencia energética, automatización y control.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105">
              Solicitar Ingeniería
            </button>
            <button className="border border-white/30 hover:bg-white hover:text-black transition px-8 py-4 rounded-full">
              Ver Proyectos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
