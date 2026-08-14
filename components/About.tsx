export default function About() {
  return (
    <section className="bg-zinc-900 text-white py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-6">
          ¿Por qué elegirnos?
        </h2>

        <div className="max-w-4xl mx-auto mb-16 text-blue-100 text-lg leading-8 text-justify space-y-8">
          <p className="text-center text-2xl font-semibold text-white">
            Nosotros nos encargamos de todo! Una experiencia diferente de principio a fin.
          </p>

          <p>
            <span className="font-bold text-cyan-400">
              • EXPLORÁ DESDE DONDE ESTÉS.
            </span>
            <br />
            Nuestros tours virtuales 360° te permiten recorrer cada ambiente y
            cada proyecto con total libertad, apreciando materiales,
            terminaciones y detalles constructivos antes de concretar una visita
            presencial.
          </p>

          <p>
            <span className="font-bold text-cyan-400">
              • INVISIBLE TECH.
            </span>
            <br />
            La domótica integrada se fusiona con el diseño arquitectónico para
            brindar confort, seguridad y automatización inteligente, sin alterar
            la estética ni la armonía de los espacios. La tecnología está donde
            debe estar: presente cuando la necesitás e invisible cuando la
            disfrutás.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/20 rounded-xl p-6 hover:bg-white/25 transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">🏛️ Arquitectura</h3>
            <p>
              Proyectos para obra nueva, remodelaciones y dirección completa
              para todo tipo de desarrollos.
            </p>
          </div>

          <div className="bg-white/20 rounded-xl p-6 hover:bg-white/25 transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">⚙️ Ingeniería</h3>
            <p>
              Soluciones técnicas, documentación profesional y planificación
              integral para proyectos de cualquier escala.
            </p>
          </div>

          <div className="bg-white/20 rounded-xl p-6 hover:bg-white/25 transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">
              🤖 Domótica y Seguridad Electrónica
            </h3>
            <p>
              Automatización inteligente para viviendas, edificios y comercios,
              integrando confort, eficiencia y seguridad.
            </p>
          </div>

          <div className="bg-white/20 rounded-xl p-6 hover:bg-white/25 transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">🔑 Llave en Mano</h3>
            <p>
              Remodelamos y entregamos tu propiedad lista para habitar o tu
              comercio preparado para iniciar actividades, ocupándonos de cada
              detalle del proceso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
