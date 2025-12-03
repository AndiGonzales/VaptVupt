"use client";
import { Modal } from "@/components/Modal/modal";
import Image from "next/image";
import CondominioForm from "../../components/Form/CondominioFormData";
import { PropsModal } from "@/Interfarce/modalInterface";
export const TranquilidadeSindico = ({
  isModalCondominioOpen,
  setIsModalCondominioOpen,
}: PropsModal) => {
  return (
    <section className="h-screen w-full bg-[#f2eadd] flex flex-col md:flex-row items-center justify-center gap-10 px-6  pt-20 md:pt-0">
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="bg-secondary rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-4 w-[300px] h-[250px] md:w-[400px] md:h-[300px] flex items-center justify-center mt-40 md:mt-0">
          <Image
            src="/sindico.png"
            alt="Síndico"
            width={500}
            height={300}
            className="rounded-2xl object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col gap-4">
        <span className="bg-orange-500 text-white text-[12px] sm:text-[13px] md:text-[14px] font-semibold px-4 py-1 rounded-full tracking-wide self-center md:self-start">
          PARA SÍNDICOS
        </span>

        <h2 className="font-extrabold text-[22px] sm:text-[26px] md:text-[32px] lg:text-[38px] xl:text-[42px] text-gray-800 tracking-tight">
          Tranquilidade para o Síndico
        </h2>

        <p className="text-gray-700 font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[19px] leading-relaxed tracking-wide">
          Com a <span className="font-semibold text-orange-500">Vapt Vupt</span>
          , o síndico conta com suporte completo para oferecer aos moradores uma
          solução de conveniência prática, segura e organizada.
        </p>
        <ul className="flex flex-col items-center text-gray-800 font-normal text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-relaxed tracking-wide space-y-2">
          <li className="flex flex-row gap-1.5">
            <span>✔</span>
            <p className="text-[16px] sm:text-[18px] md:text-[20px]">
              Instalação sem custo para o condomínio
            </p>
          </li>

          <li className="flex flex-row gap-1.5">
            <span>✔</span>
            <p className="text-[16px] sm:text-[18px] md:text-[20px]">
              Reposição e manutenção sob responsabilidade da nossa equipe
            </p>
          </li>

          <li className="flex flex-row gap-1.5">
            <span>✔</span>
            <p className="text-[16px] sm:text-[18px] md:text-[20px]">
              Mix de produtos selecionados para atender ao dia a dia dos
              moradores
            </p>
          </li>

          <li className="flex flex-row gap-1.5">
            <span>✔</span>
            <p className="text-[16px] sm:text-[18px] md:text-[20px]">
              Mais comodidade para os condôminos, menos preocupações para você
            </p>
          </li>
        </ul>

        <button
          onClick={() => setIsModalCondominioOpen(true)}
          className="flex flex-direction items-center justify-center mb-32 h-[40px] p-2.5 bg-primary text-white font-semibold rounded-full w-fit self-center md:self-start lg: cursor-pointer z-10"
        >
          Quero no Meu Condomínio
        </button>
      </div>
      <Modal
        isOpen={isModalCondominioOpen}
        onClose={() => setIsModalCondominioOpen(false)}
      >
        <CondominioForm />
      </Modal>
    </section>
  );
};
