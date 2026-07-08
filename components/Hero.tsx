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
        className="absolute inset-0 w-full h-full object-cover object-center brightness-75 contrast-110 saturate-105"
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/70" />

      {/* Contenido */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-4xl text-center">

          <h1
            className="
              text-4xl
              sm:text-6xl
              lg:text-7xl
              font-light
              leading-tight
              tracking-tight
              text-white
              drop-shadow-[0_8px_30px_rgba(0,0,0,1)]
            "
          >
            Tu vida más
            <br />
            confortable
          </h1>

          <p
            className="
              mt-8
              max-w-2xl
              mx-auto
              text-lg
              sm:text-2xl
              text-white
              leading-relaxed
              drop-shadow-[0_5px_20px_rgba(0,0,0,1)]
            "
          >
            Viví el futuro antes de mudarte.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

            <button
              onClick={onQuoteClick}
              className="
                rounded-full
                bg-cyan-500
                px-8
                py-4
                text-white
                font-semibold
                shadow-[0_15px_40px_rgba(0,0,0,.45)]
                hover:bg-cyan-400
                transition-all
                duration-300
              "
            >
              Solicitar Cotización
            </button>

            <a
              href="#servicios"
              className="
                rounded-full
                border
                border-white/40
                bg-white/5
                backdrop-blur-md
                px-8
                py-4
                text-white
                font-medium
                transition-all
                duration-300
                hover:bg-white
                hover:text-slate-900
                hover:border-white
              "
            >
              Ver Servicios
            </a>

          </div>

        </div>
      </div>

      {/* Degradado inferior */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-32
          bg-gradient-to-b
          from-transparent
          to-white
        "
      />
    </section>
  );
}