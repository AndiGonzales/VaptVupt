"use client";

import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";

type CondominioFormData = {
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
  nomeCondominio: string;
  cnpjCondominio: string;
  quantidadeUnidades: string;
  tipoUsuario: "Morador" | "Síndico";
  mercadoAutonomo: "Sim" | "Não";
};

export default function CondominioForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CondominioFormData>();

  const [status, setStatus] = useState<string | null>(null);
  const mercadoAutonomo = watch("mercadoAutonomo");

  const onSubmit = async (data: CondominioFormData) => {
    setStatus(null);
    try {
      const result = await emailjs.send(
        "service_2os7oxj",
        "template_xqu5co8",
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md w-full mx-auto p-4 bg-white rounded-2xl shadow-md space-y-4
             max-h-[90vh] overflow-y-auto scrollbar-hide"
    >
      {" "}
      {/* Nome */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Nome</label>
        <input
          {...register("nome", { required: "O nome é obrigatório" })}
          className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
          placeholder="Seu nome"
        />
        {errors.nome && (
          <span className="text-red-500 text-sm">{errors.nome.message}</span>
        )}
      </div>
      {/* E-mail */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          E-mail
        </label>
        <input
          type="email"
          {...register("email", {
            required: "O e-mail é obrigatório",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Digite um e-mail válido",
            },
          })}
          className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
          placeholder="Seu e-mail"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>
      {/* Telefone */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Telefone (com DDD)
        </label>
        <input
          {...register("telefone", { required: "O telefone é obrigatório" })}
          className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
          placeholder="(xx) xxxxx-xxxx"
        />
        {errors.telefone && (
          <span className="text-red-500 text-sm">
            {errors.telefone.message}
          </span>
        )}
      </div>
      {/* Cidade e Estado */}
      <div className="flex flex-col md:flex-row md:space-x-3">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Cidade
          </label>
          <input
            {...register("cidade", { required: "A cidade é obrigatória" })}
            className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            placeholder="Cidade"
          />
          {errors.cidade && (
            <span className="text-red-500 text-sm">
              {errors.cidade.message}
            </span>
          )}
        </div>

        <div className="mt-4 md:mt-0 w-full md:w-28">
          <label className="block text-sm font-medium text-gray-700">
            Estado
          </label>
          <select
            {...register("estado", { required: "O estado é obrigatório" })}
            defaultValue=""
            className="mt-1 w-full border border-gray-300 rounded-lg p-2"
          >
            <option value="" disabled>
              UF
            </option>
            {[
              "AC",
              "AL",
              "AP",
              "AM",
              "BA",
              "CE",
              "DF",
              "ES",
              "GO",
              "MA",
              "MT",
              "MS",
              "MG",
              "PA",
              "PB",
              "PR",
              "PE",
              "PI",
              "RJ",
              "RN",
              "RS",
              "RO",
              "RR",
              "SC",
              "SP",
              "SE",
              "TO",
            ].map((uf) => (
              <option key={uf} value={uf}>
                {uf}
              </option>
            ))}
          </select>
          {errors.estado && (
            <span className="text-red-500 text-sm">
              {errors.estado.message}
            </span>
          )}
        </div>
      </div>
      {/* Nome do condomínio */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Nome do Condomínio
        </label>
        <input
          {...register("nomeCondominio", {
            required: "O nome do condomínio é obrigatório",
          })}
          className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
          placeholder="Ex: Condomínio Jardim das Flores"
        />
        {errors.nomeCondominio && (
          <span className="text-red-500 text-sm">
            {errors.nomeCondominio.message}
          </span>
        )}
      </div>
      {/* CNPJ */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          CNPJ do Condomínio
        </label>
        <input
          {...register("cnpjCondominio", { required: "O CNPJ é obrigatório" })}
          className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
          placeholder="00.000.000/0000-00"
        />
        {errors.cnpjCondominio && (
          <span className="text-red-500 text-sm">
            {errors.cnpjCondominio.message}
          </span>
        )}
      </div>
      {/* Quantidade de unidades */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Quantidade de Unidades
        </label>
        <input
          {...register("quantidadeUnidades", {
            required: "A quantidade é obrigatória",
          })}
          className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
          placeholder="Ex: 80"
        />
        {errors.quantidadeUnidades && (
          <span className="text-red-500 text-sm">
            {errors.quantidadeUnidades.message}
          </span>
        )}
      </div>
      {/* Tipo de usuário */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Você é:
        </label>
        <select
          {...register("tipoUsuario", {
            required: "Selecione o tipo de usuário",
          })}
          defaultValue=""
          className="mt-1 w-full border border-gray-300 rounded-lg p-2"
        >
          <option value="" disabled>
            Selecione
          </option>
          <option value="Morador">Morador</option>
          <option value="Síndico">Síndico</option>
        </select>
        {errors.tipoUsuario && (
          <span className="text-red-500 text-sm">
            {errors.tipoUsuario.message}
          </span>
        )}
      </div>
      {/* Mercado Autônomo */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Seu condomínio já possui mercado autônomo?
        </label>
        <div className="flex space-x-4 mt-2">
          <label className="flex items-center space-x-1">
            <input
              type="radio"
              value="Sim"
              {...register("mercadoAutonomo", {
                required: "Selecione uma opção",
              })}
            />
            <span>Sim</span>
          </label>
          <label className="flex items-center space-x-1">
            <input
              type="radio"
              value="Não"
              {...register("mercadoAutonomo", {
                required: "Selecione uma opção",
              })}
            />
            <span>Não</span>
          </label>
        </div>
        {errors.mercadoAutonomo && (
          <span className="text-red-500 text-sm">
            {errors.mercadoAutonomo.message}
          </span>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-white py-2 rounded-lg mt-4 bg-primary"
      >
        {isSubmitting ? "Enviando..." : "Enviar"}
      </button>
      {status && <p className="text-center mt-3 font-medium">{status}</p>}
    </form>
  );
}
