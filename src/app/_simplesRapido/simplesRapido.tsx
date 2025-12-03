"use client";
import { CheckCircle, CreditCard, Scan, ShoppingBag } from "lucide-react";

export const ComoFunciona = () => {
  return (
    <section
      id="como-funciona"
      className="w-full min-h-screen bg-primary flex flex-col items-center justify-center px-4 py-16 text-center"
    >
      <div className="mb-10">
        <span className="bg-[#f29f05] text-white text-sm font-semibold px-4 py-1 rounded-full uppercase tracking-wide">
          Como Funciona
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
          Simples, Rápido e Sem Filas
        </h2>
        <p className="text-gray-200 mt-3 max-w-2xl mx-auto">
          Uma experiência prática, fácil e moderna para o seu dia a dia.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl w-full">
        <div className="flex flex-col items-center text-center">
          <div className="relative bg-[#f29f05] p-6 rounded-full shadow-lg flex items-center justify-center">
            <ShoppingBag size={36} color="white" />
            <span className="absolute -top-2 -right-2 bg-white text-[#f29f05] font-bold text-xs rounded-full w-6 h-6 flex items-center justify-center shadow">
              01
            </span>
          </div>
          <h3 className="mt-4 font-semibold text-white text-lg">
            Escolha o produto
          </h3>
          <p className="text-gray-300 text-sm mt-1">
            Escolha o produto no minimercado
          </p>
        </div>

        {/* Etapa 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="relative bg-[#f29f05] p-6 rounded-full shadow-lg flex items-center justify-center">
            <Scan size={36} color="white" />
            <span className="absolute -top-2 -right-2 bg-white text-[#f29f05] font-bold text-xs rounded-full w-6 h-6 flex items-center justify-center shadow">
              02
            </span>
          </div>
          <h3 className="mt-4 font-semibold text-white text-lg">Escaneie</h3>
          <p className="text-gray-300 text-sm mt-1">
            Escaneie o código de barras no totem
          </p>
        </div>

        {/* Etapa 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="relative bg-[#f29f05] p-6 rounded-full shadow-lg flex items-center justify-center">
            <CreditCard size={36} color="white" />
            <span className="absolute -top-2 -right-2 bg-white text-[#f29f05] font-bold text-xs rounded-full w-6 h-6 flex items-center justify-center shadow">
              03
            </span>
          </div>
          <h3 className="mt-4 font-semibold text-white text-lg">Pague</h3>
          <p className="text-gray-300 text-sm mt-1">
            Realize o pagamento com cartão, PIX, vale-refeição ou crédito
          </p>
        </div>

        {/* Etapa 4 */}
        <div className="flex flex-col items-center text-center">
          <div className="relative bg-[#f29f05] p-6 rounded-full shadow-lg flex items-center justify-center">
            <CheckCircle size={36} color="white" />
            <span className="absolute -top-2 -right-2 bg-white text-[#f29f05] font-bold text-xs rounded-full w-6 h-6 flex items-center justify-center shadow">
              04
            </span>
          </div>
          <h3 className="mt-4 font-semibold text-white text-lg">Pronto!</h3>
          <p className="text-gray-300 text-sm mt-1">
            Compra concluída em segundos!
          </p>
        </div>
      </div>
    </section>
  );
};
