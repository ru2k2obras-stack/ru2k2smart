"use client";

import { useState } from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Architecture from "../components/Architecture";
import Engineering from "../components/Engineering";
import RuditoAssistant from "@/components/assistant/RuditoAssistant";

export default function Home() {
  const [ruditoOpen, setRuditoOpen] = useState(false);

  return (
    <main>
      <Header />

      <Hero onQuoteClick={() => setRuditoOpen(true)} />

      <Services />

      <About />

      <Architecture />

      <Engineering />

      <RuditoAssistant
        open={ruditoOpen}
        onOpen={() => setRuditoOpen(true)}
        onClose={() => setRuditoOpen(false)}
      />
    </main>
  );
}