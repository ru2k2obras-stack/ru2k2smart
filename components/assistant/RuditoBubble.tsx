"use client";

type Props = {
  mensaje: string;
};

export default function RuditoBubble({ mensaje }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-xl px-4 py-3 mb-3 max-w-[240px] text-sm text-gray-700 animate-fadeIn">
      💬 {mensaje}
    </div>
  );
}
