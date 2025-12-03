"use client";

import { Modal } from "@/components/Modal/modal";
import { ModalProps } from "@/Interfarce/modalInterface";
import Form from "../../components/Form/Form";

export const OportunidadeNegocio = ({
  isModalOpen,
  setIsModalOpen,
}: ModalProps) => {
  return (
    <section className="h-full min-h-screen w-full bg-[#f2eadd] flex flex-col items-center justify-center px-6 py-16 pt-14">
      <div className="text-center flex flex-col items-center gap-1.5 pt-40 pb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 md:pt-0 md:mt-0">
          Oportunidade de Negócio Inteligente
        </h2>
        <p className="text-gray-700 mt-2 max-w-2xl mx-auto md:pb-5">
          O modelo da 
           <strong className="text-black pl-1">Vapt Vupt</strong> foi criado para quem busca empreender com
          segurança, baixo investimento e alto potencial de retorno.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {[
          {
            titulo: "Baixo custo de entrada",
            texto: "Investimento inicial acessível",
            icone: "📉",
          },
          {
            titulo: "Condomínios já disponíveis",
            texto: "Pontos estratégicos pré-selecionados",
            icone: "🏢",
          },
          {
            titulo: "Suporte completo",
            texto: "Assistência em todas as etapas",
            icone: "🎧",
          },
          {
            titulo: "Operação simples",
            texto: "Modelo descomplicado de gestão",
            icone: "⚡",
          },
          {
            titulo: "Demanda constante",
            texto: "Público cativo em condomínios",
            icone: "🔁",
          },
          {
            titulo: "Mix variado",
            texto: "Produtos de alta rotatividade",
            icone: "📦",
          },
          {
            titulo: "Início imediato",
            texto: "Comece a operar rapidamente",
            icone: "🚀",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md border border-orange-200 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
          >
            <span className="text-3xl mb-3">{item.icone}</span>
            <h3 className="text-lg font-semibold text-gray-800">
              {item.titulo}
            </h3>
            <p className="text-gray-600 text-sm mt-1">{item.texto}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-orange-500 font-semibold mb-6">
          Construa resultados reais com uma franquia inovadora, alinhada ao
          futuro do consumo.
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-4 px-4 py-2 bg-primary text-white cursor-pointer w-[200px] font-bold rounded-[20px]"
        >
          Seja um Franqueado
        </button>
        <div id="botao-franqueado" className="w-fit mx-auto">
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Form />
      </Modal>
        </div>
      </div>
    </section>
  );
};
