"use client";

import Image from "next/image";
import { ModalProps } from "@/Interfarce/modalInterface";

export const Home = ({ isModalOpen, setIsModalOpen }: ModalProps) => {
  return (
    <header className="w-full h-screen bg-cover bg-center bg-[url('/backgroundImage.jpg')] flex flex-col items-center justify-center gap-20">
      <div className="flex flex-col items-center pt-24 gap-10">
        <Image
          className="sm:w-[300px]"
          src="/LogoVaptVupt.svg"
          alt="VaptVupt, Mais do que uma Loja de Conveniência. Somos seu Parceiro do Dia a dia!"
          width={300}
          height={120}
        />
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-0.5 leading-tight text-gray-900">
            <h2 className="font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] tracking-wide">
              Franquia de Minimercados Autônomos
            </h2>

            <h2 className="font-normal text-[13px] sm:text-[15px] md:text-[17px] lg:text-[19px] tracking-wide">
              Abra sua loja e comece a lucrar!
            </h2>

            <h2 className="font-semibold text-[15px] sm:text-[17px] md:text-[18px] lg:text-[20px] tracking-wide">
              Baixo Investimento: a partir de R$ 50 mil
            </h2>

            <h2 className="font-extrabold text-[20px] text-primary tracking-tight uppercase sm:text-[24px] md:text-[28px] lg:text-[32px] ">
              Lojas prontas
            </h2>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 px-4 py-2 bg-primary text-white cursor-pointer w-[200px] font-bold rounded-[20px] lg:mb-8"
          >
            Seja um Franqueado
          </button>
        </div>
      </div>
    </header>
  );
};
