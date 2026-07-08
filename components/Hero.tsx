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
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-center
          brightness-90
          contrast-105
          saturate-105
        "
      />

      {/* Overlay oscuro suave */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/45" />

      {/* Contenido */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 pt-16 pb-36">
        <div className="max-w-4xl text-center">

          <h1
            className="
              text-5xl
              sm:text-6xl
              lg:text-7xl
              font-light
              tracking-tight
              leading-tight
              text-white
              drop-shadow-[0_4px_18px_rgba(0,0,0,.8)]
            "
          >
            Tu vida más
            <br />
            confortable
          </h1>

          <p
            className="
              mt-6
              mx-auto
              max-w-2xl
              text-lg
              sm:text-2xl
              text-white
              leading-relaxed
              drop-shadow-[0_3px_10px_rgba(0,0,0,.8)]
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
                shadow-lg
                transition-all
                duration-300
                hover:bg-cyan-400
                hover:scale-105
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
                bg-white/10
                backdrop-blur-md
                px-8
                py-4
                text-white
                font-medium
                transition-all
                duration-300
                hover:bg-white
                hover:text-slate-900
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
          via-white/10
          to-white
        "
      />
    </section>
  );
}