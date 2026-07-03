export default function About() {
  return (
    <section className="bg-zinc-900 text-white py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-6">
          ¿Por qué elegirnos?
        </h2>
        <p className="text-center text-blue-200 max-w-3xl mx-auto mb-16">
          Nuestro equipo se encargará de todo!
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/20 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2">🏛️ Arquitectura</h3>
            <p>Proyectos para obra nueva, remodelaciones y dirección completa para todo tipo de desarrollos.
            </p>
          </div>
          <div className="bg-white/20 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2">⚙️ Ingeniería</h3>
            <p>Soluciones técnicas y documentación profesional.</p>
          </div>
          <div className="bg-white/20 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2">🤖 Domótica y Seguridad Electrónica</h3>
            <p>Automatización inteligente para viviendas y todo tipo de edificios y comercios.</p>
          </div>
          <div className="bg-white/20 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2">🔑 Llave en Mano</h3>
            <p>Remodelamos y te entregamos la propiedad lista para mudarte o tu comercio con inicio de actividades economicas declaradas.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
