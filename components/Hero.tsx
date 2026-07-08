type HeroProps = {
  onQuoteClick: () => void;
};

export default function Hero({ onQuoteClick }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative h-screen overflow-hidden"
    >
      {/* Imagen de fondo */}
      <img
        src="/images/buenosaires.jpg"
        alt="RU2K2 SMART"
        className="absolute inset-0 w-full h-full object-cover object-center brightness-110 contrast-110 saturate-110"
      />

      {/* Luz ambiente */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Degradado muy sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100/10 via-transparent to-slate-50/15" />

      {/* Halo detrás del texto */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[900px]
          h-[500px]
          rounded-full
          bg-white/15
          blur-3xl
        "
      />

      {/* Contenido */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
  <div className="max-w-4xl text-center">

    <h2
      className="
      text-sm
      sm:text-lg
      uppercase
      tracking-[0.35em]
      text-cyan-300
      font-medium
      mb-5
      "
    >
    </h2>

    <h1
      className="
      text-4xl
      sm:text-6xl
      lg:text-7xl
      font-light
      tracking-tight
      text-white
      leading-tight
      drop-shadow-[0_6px_20px_rgba(0,0,0,.95)]
      "
    >
      Tu vida más confortable
    </h1>

    <p
      className="
      mt-6
      max-w-2xl
      mx-auto
      text-lg
      sm:text-2xl
      text-white/95
      leading-relaxed
      drop-shadow-[0_5px_15px_rgba(0,0,0,.9)]
      "
    >
      Viví el futuro antes de mudarte.
      Arquitectura, ingeniería y automatización
      integradas en un mismo proyecto.
    </p>

    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

      <button
        onClick={onQuoteClick}
        className="
        rounded-full
        bg-cyan-500
        px-8
        py-4
        text-white
        font-semibold
        hover:bg-cyan-400
        transition
        "
      >
        Solicitar Cotización
      </button>

      <a
        href="#servicios"
        className="
        rounded-full
        border
        border-white/70
        px-8
        py-4
        text-white
        hover:bg-white
        hover:text-slate-900
        transition
        "
      >
        Ver Servicios
      </a>

          </div>

        </div>
      </div>

      {/* Transición muy sutil hacia la siguiente sección */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-32
          bg-gradient-to-b
          from-transparent
          via-white/10
          to-white
        "
      />
    </section>
  );
}