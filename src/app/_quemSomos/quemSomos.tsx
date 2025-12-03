import { ModalProps } from "@/Interfarce/modalInterface";
import React from "react";
import { Clock, ShieldCheck, TrendingUp } from "lucide-react";

export const QuemSomos = ({ isModalOpen, setIsModalOpen }: ModalProps) => {
  return (
    <section className="min-h-screen w-full bg-secondary flex flex-col md:flex-row items-center justify-center px-6 py-16 md:py-24 gap-10">
      <div className="flex flex-col items-center md:w-1/2 text-left">
        <h2 className="text-primary text-2xl font-semibold mb-4">Quem Somos</h2>
        <h1 className="text-black text-4xl font-bold mb-6">Nossa História</h1>
        <p className="text-gray100 leading-relaxed text-base mb-4">
          A <strong className="text-black">Vapt Vupt</strong> é uma empresa que
          acredita que o tempo é o bem mais valioso do dia a dia. Por isso,
          criamos um modelo de minimercado inteligente, instalado dentro de
          condomínios, que garante comodidade para os moradores, tranquilidade
          para os síndicos e uma excelente oportunidade de negócio para
          investidores.
        </p>
        <p className="text-gray100 leading-relaxed text-base mb-8">
          Mais do que comercializar produtos, nosso propósito é 
          <strong className="text-black p-1">
             cuidar de cada detalhe da experiência,
          </strong>
          aproximando pessoas e transformando rotinas.
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 ml-2.5 mr-2.5  max-w-[300px] py-3 bg-primary text-white rounded-[30px] font-bold hover:brightness-90 transition cursor-pointer"
        >
          Quero ser um Franqueado agora!
        </button>
      </div>
      <div className="md:w-1/2 flex flex-col gap-6 pb-[25px]">
        <div className="bg-white shadow-md rounded-2xl p-6 flex items-start gap-4 border border-gray-100">
          <Clock className="text-primary w-6 h-6 mt-1" />
          <div>
            <h3 className="font-bold text-black text-lg">Disponível 24h</h3>
            <p className="text-gray100 text-sm">
              Acesso a qualquer hora do dia ou da noite
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 flex items-start gap-4 border border-gray-100">
          <ShieldCheck className="text-primary w-6 h-6 mt-1" />
          <div>
            <h3 className="font-bold text-black text-lg">Segurança Total</h3>
            <p className="text-gray100 text-sm">
              Ambiente controlado dentro do seu condomínio
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 flex items-start gap-4 border border-gray-100">
          <TrendingUp className="text-primary w-6 h-6 mt-1" />
          <div>
            <h3 className="font-bold text-black text-lg">
              Resultados Garantidos
            </h3>
            <p className="text-gray100 text-sm">
              Modelo de negócio comprovado e rentável
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
