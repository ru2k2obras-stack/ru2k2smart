import {
  Building2,
  Cog,
  Hammer,
  Lightbulb,
  FileCheck,
  ShieldCheck,
} from "lucide-react";

export default function Services() {
  const servicios = [
    {
      icono: Building2,
      titulo: "ARQUITECTURA",
      descripcion:
        "Proyectos/desarrollos para obra nueva, Ley de Edificación, demoliciones, Ley de Fachada 257/6116, remodelaciones, restauración y ambientación de espacios antiguos y modernos.",
    },
    {
      icono: Cog,
      titulo: "INGENIERÍA",
      descripcion:
        "Consultoría y Dirección Tecniá para instalaciones, cálculo estructural y sus habilitaciones profesionales o comerciales.",
    },
    {
      icono: Hammer,
      titulo: "NUEVAS PERFORMANCES HABITACIONALES Y COMERCIALES.",
      descripcion:
        "Obras llave en mano y seguimiento integral de cada etapa.",
    },
    {
      icono: Lightbulb,
      titulo: "INNOVACIÓN",
      descripcion:
        "Automatización inteligente para viviendas, negocios, edificios e industrias.",
    },
    {
      icono: FileCheck,
      titulo: "CONSULTORÍA",
      descripcion:
        "Normativas, habilitaciones y documentación profesional con croquis preliminares, anteproyectos y sus seguimientos.",
    },
    {
      icono: ShieldCheck,
      titulo: "CONTROL EN LÍNEA Y SEGURIDAD ELECTRÓNICA",
      descripcion:
        "Domótica y control parcial o total de los sistemas que brindan confort y resguardo habitacional para comunidades con consorcios o dominios propios.",
    },
  ];

  return (
    <section
      id="servicios"
      className="bg-gray-100 py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-black text-center text-gray-900 mb-5">
          Te ayudamos con:
        </h2>

        <p className="text-center text-blue-700 text-lg max-w-4xl mx-auto mb-14 leading-8">
          CONSULTORÍA Y SOLUCIONES INTEGRALES para la construcción,
          renovación y automatización de espacios modernos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">

          {servicios.map((servicio) => {
            const Icono = servicio.icono;

            return (
              <div
                key={servicio.titulo}
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  bg-white
                  p-6
                  shadow-md
                  border
                  border-slate-200
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                  hover:border-blue-500
                  group
                "
              >
                {/* Luz superior */}
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-600 to-cyan-400"></div>

                {/* Reflejo */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-700 transition-opacity">
                  <div className="absolute -left-28 top-0 h-full w-24 rotate-12 bg-white/40 blur-2xl"></div>
                </div>

                {/* Ícono */}
                <div className="flex justify-center mb-5">
                  <div className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-gradient-to-br
                    from-blue-600
                    to-cyan-500
                    flex
                    items-center
                    justify-center
                    shadow-lg
                    group-hover:scale-110
                    group-hover:rotate-6
                    transition-all
                    duration-500
                  ">
                    <Icono
                      size={30}
                      strokeWidth={2.2}
                      className="text-white"
                    />
                  </div>
                </div>

                {/* Título */}
                <h3 className="
                  text-lg
                  font-black
                  text-center
                  text-gray-900
                  uppercase
                  tracking-wide
                  mb-3
                  group-hover:text-blue-700
                  transition-colors
                ">
                  {servicio.titulo}
                </h3>

                <div className="
                  w-12
                  h-1
                  rounded-full
                  bg-blue-600
                  mx-auto
                  mb-4
                  group-hover:w-20
                  transition-all
                  duration-500
                " />

                {/* Texto */}
                <p className="
                  text-center
                  text-gray-600
                  text-[15px]
                  leading-7
                ">
                  {servicio.descripcion}
                </p>

                {/* Glow */}
                <div className="
                  absolute
                  -bottom-16
                  left-1/2
                  -translate-x-1/2
                  w-44
                  h-44
                  bg-blue-400/10
                  blur-3xl
                  group-hover:bg-cyan-400/20
                  transition-all
                  duration-700
                " />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}