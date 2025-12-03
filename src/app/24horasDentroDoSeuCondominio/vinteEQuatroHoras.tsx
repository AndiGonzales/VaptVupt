"use client";
export const MixCondominio = () => {
  return (
    <section className="w-full flex flex-col">
      <div className="bg-[#ffffff] w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 gap-10">
        <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
          <span className="bg-orange-400 text-white text-sm font-semibold px-4 py-1 rounded-full self-center md:self-start">
            PARA MORADORES
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            24 Horas Dentro do Seu Condomínio
          </h2>

          <p className="text-gray-700 leading-relaxed max-w-lg mx-auto md:mx-0">
            Com a <strong className="text-black">Vapt Vupt</strong>, você tem mais praticidade no seu dia para resolver as pequenas urgências do dia a dia.  
            Bebidas, snacks, sobremesas, itens de higiene e produtos de limpeza muito mais — tudo à disposição 24 horas
            por dia, no conforto do seu condomínio.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {[
              { titulo: "24/7", texto: "Disponível sempre", icone: "⏰" },
              { titulo: "Perto de Você", texto: "Dentro do seu condomínio", icone: "🏠" },
              { titulo: "Prático", texto: "Solução rápida e fácil", icone: "⚡" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#f2eadd] border border-orange-300 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:shadow-md transition"
              >
                <span className="text-2xl">{item.icone}</span>
                <h3 className="text-gray-800 font-semibold mt-2">{item.titulo}</h3>
                <p className="text-gray-600 text-sm">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="flex-1 flex justify-center">
          <div className="bg-secondary border-2 border-orange-400 rounded-2xl w-[220px] h-[220px] md:w-[280px] md:h-[280px] flex items-center justify-center shadow-md">
            <h3 className="text-4xl font-semibold text-orange-700">24/7</h3>
          </div>
        </div> */}
      </div>

      <div className="bg-secondary w-full flex flex-col items-center justify-center px-6 md:px-16 py-16">
        <span className="bg-orange-400 text-white text-sm font-semibold px-4 py-1 rounded-full">
          NOSSOS PRODUTOS
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
          Mix Completo
        </h2>

        <p className="text-gray-700 text-center mt-2 max-w-2xl">
          Oferecemos uma seleção de produtos pensada para atender às necessidades reais do dia a dia.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 w-full max-w-4xl">
          {[
            { titulo: "Lanches rápidos e práticos", icone: "🥪" },
            { titulo: "Bebidas alcoólicas e não alcoólicas", icone: "🍹" },
            { titulo: "Sorvetes e sobremesas", icone: "🍦" },
            { titulo: "Mercearia básica", icone: "🛒" },
            { titulo: "Higiene e limpeza", icone: "🧼" },
            { titulo: "Cuidados para pets", icone: "🐾" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-orange-200 rounded-xl shadow-sm hover:shadow-md transition p-5 flex flex-col items-center justify-center text-center"
            >
              <span className="text-3xl mb-2">{item.icone}</span>
              <h3 className="text-gray-800 font-semibold">{item.titulo}</h3>
            </div>
          ))}
        </div>

        <p className="text-orange-600 font-semibold text-center mt-10">
          Daquele lanche rápido ao churrasco de última hora, a Vapt Vupt está sempre por perto.
        </p>
      </div>
    </section>
  );
};
