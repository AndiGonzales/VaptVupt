"use client";

import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";

type FormData = {
  nome: string;
  email: string;
  telefone: string;
  cidade: string;
  estado:
    | "AC"
    | "AL"
    | "AP"
    | "AM"
    | "BA"
    | "CE"
    | "DF"
    | "ES"
    | "GO"
    | "MA"
    | "MT"
    | "MS"
    | "MG"
    | "PA"
    | "PB"
    | "PR"
    | "PE"
    | "PI"
    | "RJ"
    | "RN"
    | "RS"
    | "RO"
    | "RR"
    | "SC"
    | "SP"
    | "SE"
    | "TO";
  investimento:
    | "Não tenho investimento no momento"
    | "Até R$ 50 mil"
    | "Acima de R$ 50 mil";
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setStatus(null);
    try {
      const result = await emailjs.send(
        "service_2os7oxj",
        "template_f58cabl",
        data,
        "y-8i2amTGUlHXp5rz"
      );

      if (result.text === "OK") {
        setStatus("Mensagem enviada com sucesso!");
        reset();
      }
    } catch (error) {
      console.error(error);
      setStatus("Erro ao enviar. Tente novamente mais tarde.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mt-1.5">Nome</label>{" "}
        <input
          className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Nome"
          {...register("nome", { required: "O nome é obrigatório" })}
        />
        {errors.nome && <span>{errors.nome.message}</span>}
        <label className="block text-sm font-medium text-gray-700 mt-1.5">
          E-mail
        </label>
        <input
          className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="E-mail"
          type="email"
          {...register("email", {
            required: "O e-mail é obrigatório",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Digite um e-mail válido",
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <label className="block text-sm font-medium text-gray-700 mt-1.5">
          Telefone (com DDD)
        </label>
        <input
          className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Telefone (Com DDD)"
          {...register("telefone", { required: "O telefone é obrigatório" })}
        />
        {errors.telefone && <span>{errors.telefone.message}</span>}
      </div>

<div className="flex flex-col md:flex-row md:space-x-3">
  <div className="flex-1">
    <label className="block text-sm font-medium text-gray-700 mt-1.5">
      Cidade
    </label>
    <input
      className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Cidade"
      {...register("cidade", { required: "A cidade é obrigatória" })}
    />
    {errors.cidade && <span>{errors.cidade.message}</span>}
  </div>

  <div className="mt-4 md:mt-0 w-full md:w-28">
    <label className="block text-sm font-medium text-gray-700 mt-1.5">
      Estado
    </label>
    <select
      className="mt-1 w-full border border-gray-300 rounded-lg p-2"
      {...register("estado", { required: "O estado é obrigatório" })}
      defaultValue=""
    >
      <option value="" disabled>
        Estado
      </option>
      <option value="AC">AC</option>
      <option value="AL">AL</option>
      <option value="AP">AP</option>
      <option value="AM">AM</option>
      <option value="BA">BA</option>
      <option value="CE">CE</option>
      <option value="DF">DF</option>
      <option value="ES">ES</option>
      <option value="GO">GO</option>
      <option value="MA">MA</option>
      <option value="MT">MT</option>
      <option value="MS">MS</option>
      <option value="MG">MG</option>
      <option value="PA">PA</option>
      <option value="PB">PB</option>
      <option value="PR">PR</option>
      <option value="PE">PE</option>
      <option value="PI">PI</option>
      <option value="RJ">RJ</option>
      <option value="RN">RN</option>
      <option value="RS">RS</option>
      <option value="RO">RO</option>
      <option value="RR">RR</option>
      <option value="SC">SC</option>
      <option value="SP">SP</option>
      <option value="SE">SE</option>
      <option value="TO">TO</option>
    </select>
    {errors.estado && <span>{errors.estado.message}</span>}
  </div>
</div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mt-1.5">Investimento Disponível</label>
        <select
        className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("investimento", {
            required: "O investimento é obrigatório",
          })}
          defaultValue=""
        >
          <option value="" disabled>
            Selecione
          </option>
          <option value="Não tenho investimento no momento">
            Não tenho investimento no momento
          </option>
          <option value="Até R$ 50 mil">Até R$ 50 mil</option>
          <option value="Acima de R$ 50 mil">Acima de R$ 50 mil</option>
        </select>
        {errors.investimento && <span>{errors.investimento.message}</span>}
      </div>

      <button className="w-full bg-primary text-white py-2 rounded-lg mt-5 cursor-pointer" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Enviar"}
      </button>

      {status && <p>{status}</p>}
    </form>
  );
}
