"use client";

import ContactForm from "@/components/Form/Form";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export const Contato = () => {
  return (
    <section
      id="contato"
      className="w-full min-h-screen bg-secondary flex flex-col items-center justify-center px-4 py-16 text-center"
    >
      <div className="mb-8">
        <span className="bg-primary text-white text-sm font-semibold px-4 py-1 rounded-full uppercase tracking-wide">
          Contato
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#012a26] mt-4">
          Fale Com a Gente
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Quer levar a <strong>Vapt Vupt</strong> para o seu condomínio ou saber
          mais sobre o modelo de franquia? Estamos prontos para ajudar!
        </p>
      </div>

      <p className="text-gray-500 text-sm mt-6">
        Atendimento rápido e direto pelo WhatsApp 📱
      </p>

      <Link
        href="https://wa.me/5517991991921"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary hover:brightness-110 text-white font-semibold px-8 py-4 rounded-full flex items-center gap-2 shadow-lg transition-all duration-300 hover:scale-105 mb-10 mt-5"
        aria-label="Falar com a Vapt Vupt no WhatsApp"
      >
        <MessageCircle size={22} />
        Falar no WhatsApp
      </Link>

      <div className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-lg">
        <ContactForm />
      </div>
    </section>
  );
};
