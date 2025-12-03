"use client";
import Image from "next/image";

export const Sobre = () => {
  return (
    <section className="w-full bg-secondary">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-stretch ">
        <div className="w-full md:w-1/2 bg-orange-500 flex justify-center items-center p-4 xl:rounded-[15px] md:ml-6">
          <Image
            src="/ImageSobreVaptVupt.svg"
            alt="Loja Vapt Vupt, conveniência 24 horas"
            width={600}
            height={400}
            className="object-cover rounded-2xl"
            priority
          />
        </div>

        <div className="flex flex-col items-center gap-2.5 w-full md:w-1/2 p-6 md:p-12">
          <h2 className="font-extrabold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[34px] xl:text-[38px] tracking-tight">
            A <span className="text-orange-500">Vapt Vupt</span> nasceu para
            transformar a forma como moradores consomem dentro de condomínios.
          </h2>
          <p className="text-gray-700 font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[19px] leading-relaxed tracking-wide">
            Nosso propósito é simples: estar sempre por perto, oferecendo
            conveniência, segurança e confiança.
          </p>
          <p className="text-gray-700 font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[19px] leading-relaxed tracking-wide">
            Seja síndico, investidor ou morador: aqui você encontra soluções que
            facilitam a vida e geram resultados.
          </p>
        </div>
      </div>
    </section>
  );
};
