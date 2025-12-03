"use client"
import { Home } from "@/app/_home/home";
import {Sobre} from "./_sobre/sobre";
import { useState } from "react";
import { QuemSomos } from "./_quemSomos/quemSomos";
import { TranquilidadeSindico } from "./_tranquilidadeSindico/tranquilidadeSindico";
import { OportunidadeNegocio } from "./_oportunidadeNegocio/oportunidadeNegocio";
import { MixCondominio } from "./24horasDentroDoSeuCondominio/vinteEQuatroHoras";
import { ComoFunciona } from "./_simplesRapido/simplesRapido";
import { Contato } from "./_contato/contato";
import { Modal } from "@/components/Modal/modal";
import  Form  from "../components/Form/Form";

export default function VaptVupt() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalCondominioOpen, setIsModalCondominioOpen] = useState(false);
  return (
    <>
      <Home isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        <Sobre/>
      <QuemSomos isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <TranquilidadeSindico isModalCondominioOpen={isModalCondominioOpen} setIsModalCondominioOpen={setIsModalCondominioOpen}/>
      <OportunidadeNegocio isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <MixCondominio/>
      <ComoFunciona/>
      <Contato/>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Form />
      </Modal>

    </>
  );
}
