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
        <div className="text-center max-w-6xl animate-[fadeIn_1.2s_ease]">

          <h1
            className="
              text-1xl
              md:text-8xl
              lg:text-6xl
              font-black
              leading-none
              tracking-tight

              bg-gradient-to-r
              from-white
              via-slate-100
              to-cyan-200

              bg-clip-text
              text-transparent

              drop-shadow-[0_8px_30px_rgba(0,0,0,.9)]

              [text-shadow:
                0_2px_0_rgba(255,255,255,.30),
                0_8px_20px_rgba(0,0,0,.55),
                0_20px_45px_rgba(0,0,0,.45)]
            "
          >
            Tu vida más confortable
          </h1>

          <p
            className="
              mt-8
              text-2xl
              md:text-4xl
              lg:text-3xl
              font-light
              tracking-[0.08em]
              text-white
              drop-shadow-[0_6px_20px_rgba(0,0,0,.95)]
            "
          >
            Viví el futuro antes de mudarte
          </p>

          {/* Línea luminosa */}
          <div
            className="
              mx-auto
              mt-10
              h-[3px]
              w-44
              rounded-full
              bg-gradient-to-r
              from-transparent
              via-cyan-300
              to-transparent
              shadow-[0_0_30px_rgba(34,211,238,.8)]
            "
          />

          <div className="mt-14 flex flex-wrap justify-center gap-6">

            <button
              onClick={onQuoteClick}
              className="
                rounded-full
                bg-cyan-500
                px-10
                py-5
                text-lg
                font-bold
                text-white

                shadow-[0_0_35px_rgba(6,182,212,.45)]

                transition-all
                duration-300

                hover:scale-105
                hover:bg-cyan-400
                hover:shadow-[0_0_55px_rgba(6,182,212,.75)]
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

                px-10
                py-5

                text-lg
                font-semibold
                text-white

                transition-all
                duration-300

                hover:bg-white/20
                hover:border-cyan-300
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