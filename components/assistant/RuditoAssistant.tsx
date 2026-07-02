"use client";

import { useEffect, useState } from "react";

type Props = {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export default function RuditoAssistant({
  open,
  onOpen,
  onClose,
}: Props) {

  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    servicio: "",
    nombre: "",
    telefono: "",
    observaciones: "",
  });

  const mensajes = [
    "👋 ¡Hola! Soy Rudito.",
    "¿Tenés un proyecto en mente?",
    "¿Necesitás una cotización?",
    "Estoy para ayudarte.",
    "Construimos el futuro juntos."
  ];

  const [mensajeActual, setMensajeActual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setMensajeActual((prev) => (prev + 1) % mensajes.length);
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  const enviarWhatsApp = () => {
    const mensaje = `Hola RU2K2 SMART 👋

Quiero solicitar una cotización.

Servicio:
${form.servicio}

Nombre:
${form.nombre}

Teléfono:
${form.telefono}

Observaciones:
${form.observaciones}
`;

    const url =
      "https://wa.me/5491170642524?text=" +
      encodeURIComponent(mensaje);

    window.open(url, "_blank");
  };

  // Rudito visible cuando el asistente está cerrado
  if (!open) {
    return (
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">

        <div className="bg-white border rounded-2xl shadow-xl px-4 py-2 mb-3 max-w-[220px] text-sm">
          💬 {mensajes[mensajeActual]}
        </div>

        <img
  src="/rudito/rudito.png"
  alt="Rudito"
  onClick={onOpen}
  className="rudito w-32 cursor-pointer hover:scale-105 transition-all duration-300"
/>

      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-end justify-end">

      <div className="bg-white w-full max-w-md h-[650px] rounded-t-3xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col">

        {/* Header */}

        <div className="bg-orange-500 text-white p-5 flex justify-between items-center">

          <div>

            <h2 className="text-xl font-bold">
              🤖 Rudito
            </h2>

            <p className="text-sm opacity-90">
              Asistente de RU2K2 SMART
            </p>

          </div>

          <button
            onClick={() => {
              setStep(1);
              onClose();
            }}
            className="text-2xl"
          >
            ✕
          </button>

        </div>

        <div className="flex-1 overflow-y-auto p-6">

          {step === 1 && (

            <div>

              <h3 className="text-2xl font-bold mb-3">
                👋 Hola
              </h3>

              <p className="text-gray-600 mb-8">
                Soy Rudito.
                Voy a ayudarte a preparar tu solicitud para que nuestro equipo pueda responderte más rápido.
              </p>

              <button
                onClick={() => setStep(2)}
                className="bg-orange-500 hover:bg-orange-600 text-white w-full py-4 rounded-xl font-semibold"
              >
                Comenzar
              </button>

            </div>

          )}

          {step === 2 && (

            <div>

              <h3 className="text-xl font-bold mb-4">
                ¿Qué querés hacer hoy?
              </h3>

              <select
                className="w-full border rounded-xl p-3"
                value={form.servicio}
                onChange={(e) =>
                  setForm({
                    ...form,
                    servicio: e.target.value,
                  })
                }
              >
                <option value="">Seleccionar</option>
                <option>Arquitectura</option>
                <option>Ingeniería</option>
                <option>Construcción</option>
                <option>Remodelación</option>
                <option>Domótica</option>
                <option>Automatización Industrial</option>
                <option>Automatización de Consorcios</option>
                <option>Smart Ready</option>
                <option>Compra de Productos</option>
                <option>Otro</option>
              </select>

              <button
                onClick={() => setStep(3)}
                className="bg-orange-500 hover:bg-orange-600 text-white w-full py-4 rounded-xl mt-8"
              >
                Continuar
              </button>

            </div>

          )}

          {step === 3 && (

            <div>

              <h3 className="text-xl font-bold mb-5">
                Contame un poco sobre vos
              </h3>

              <input
                placeholder="Nombre"
                className="w-full border rounded-xl p-3 mb-4"
                value={form.nombre}
                onChange={(e) =>
                  setForm({
                    ...form,
                    nombre: e.target.value,
                  })
                }
              />

              <input
                placeholder="Teléfono"
                className="w-full border rounded-xl p-3 mb-4"
                value={form.telefono}
                onChange={(e) =>
                  setForm({
                    ...form,
                    telefono: e.target.value,
                  })
                }
              />

              <textarea
                rows={5}
                placeholder="Contame qué necesitás..."
                className="w-full border rounded-xl p-3"
                value={form.observaciones}
                onChange={(e) =>
                  setForm({
                    ...form,
                    observaciones: e.target.value,
                  })
                }
              />

              <button
                onClick={enviarWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white w-full py-4 rounded-xl mt-8 font-bold"
              >
                Enviar por WhatsApp
              </button>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}
