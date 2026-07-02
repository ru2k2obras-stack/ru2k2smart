"use client";
type Props = { onClick: () => void };

export default function RuditoAvatar({ onClick }: Props) {
  return (
    <img
      src="/rudito/rudito.png"
      alt="Rudito"
      onClick={onClick}
      className="rudito w-32 cursor-pointer hover:scale-105 transition-all duration-300"
    />
  );
}
