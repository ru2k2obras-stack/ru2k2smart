type HeroProps = {
  onQuoteClick: () => void;
};

export default function Hero({ onQuoteClick }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* Fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
  backgroundImage: "url('/images/buenosaires.jpg')",
  backgroundPosition: "center",
  backgroundSize: "cover",
  filter: "brightness(1.15) saturate(1.2)",
        }}
      />

      {/* Oscurecer la imagen */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent"></div>

      {/* Texto */}
      <div className="relative z-10 text-center text-white px-6">

        <h1 className="text-6xl text-gray-90000 md:text-7xl font-bold text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)]">
          Tu vida más confortable
        </h1>

        <h2 className="text-3xl text-gray-80000 md:text-4xl font-bold text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)]">
          Viví el futuro antes de mudarte
        </h2>

        <div className="flex gap-5 justify-center">

          <button
  onClick={onQuoteClick}
  className="bg-blue-500 hover:bg-blue-100 px-8 py-4 rounded-full font-bold"
>
  Solicitar Presupuesto
</button>

          <button className="border border-blue px-8 py-4 rounded-full hover:bg-black hover:text-white">
            Contactanos
          </button>

        </div>

      </div>


    </section>
  );
}