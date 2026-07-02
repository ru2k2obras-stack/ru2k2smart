export default function Services() {
  const servicios = [
    {
      titulo:"ARQUITECTURA",
      descripcion: "Proyectos de obra nueva, remodelaciones y restauración.",
    },
    {
      titulo: "INGENIERÍA",
      descripcion: "Instalaciones, cálculo y dirección técnica.",
    },
    {
      titulo: "NUEVOS PROYECTOS",
      descripcion: "Obras llave en mano y seguimiento integral.",
    },
    {
      titulo: "INNOVACÍON",
      descripcion: "Automatización de viviendas y edificios.",
    },
    {
      titulo: "CONSULTORÍA",
      descripcion: "Normativas, habilitaciones y documentación profesional.",
    },
    {
      titulo: "CONTROL EN LÍNEA Y SEGURIDAD ELECTRÓNICA (DOMÓTICA)",
      descripcion: "Consorcios, salas de máquinas y edificios inteligentes.",
    },
  ];

  return (
    <section
      id="servicios"
      className="bg-gray-100 py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4">
          Te ayudamos con:
        </h2>

        <p className="text-center text-blue-400 mb-16">
          CONSULTORÍA Y SOLUCIONES INTEGRALES: para la construcción, renovación y automatización de espacios modernos.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {servicios.map((servicio) => (
            <div
              key={servicio.titulo}
              className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-blue-100"
            >
              <h3 className="group-hover:scale-110 transition-transform duration-700">
                {servicio.titulo}
              </h3>

              <p>{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
