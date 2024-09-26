'use client'; // Força a página a ser renderizada apenas no lado do cliente

import React, { useState, useEffect } from 'react';
import { getCourses } from '../../server/courses';
import Modal from '../../components/Modal';
import Header from '../../components/Header'; // Importando o Header

const MultiStepForm: React.FC = () => {
  const [courseValue, setCourseValue] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false); // Estado para o modal
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    endereco: '',
    numeroCartao: '',
    validadeCartao: '',
    cvv: '',
  });

  // Captura o courseId da URL manualmente
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const courseId = searchParams.get('courseId');

    // Função para buscar o valor do curso com base no ID
    if (courseId) {
      const course = getCourses.find((course) => course.id === courseId);
      if (course) {
        setCourseValue(course.valor);
      }
    }
  }, []);

  // Função para ir para o próximo passo
  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  // Função para voltar ao passo anterior
  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  // Função para manipular mudanças nos inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função para enviar o formulário no final
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true); // Exibe o modal de sucesso
  };

  // Função para fechar o modal e redirecionar para a home
  const handleModalClose = () => {
    setShowModal(false);
    window.location.href = '/'; // Redireciona para a home
  };

  // Função para renderizar as bolinhas de progresso
  const renderStepIndicators = () => {
    const steps = [1, 2, 3];
    return (
      <div className="flex justify-center mb-8">
        {steps.map((stepNumber) => (
          <div
            key={stepNumber}
            className={`w-8 h-8 rounded-full mx-2 ${
              step === stepNumber ? 'bg-purple-700' : 'bg-purple-400'
            }`}
            style={{
              border: step === stepNumber ? '3px solid blue' : 'none',
            }}
          ></div>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Incluímos o Header */}
      <Header />

      <div className="container mx-auto my-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Formulário de Matrícula</h1>

        {/* Indicadores de progresso (bolinhas) */}
        {renderStepIndicators()}

        {/* Etapa 1 - Dados pessoais */}
        {step === 1 && (
          <form onSubmit={nextStep} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-semibold mb-6">Dados Pessoais</h2>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Nome</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Endereço</label>
              <input
                type="text"
                name="endereco"
                value={formData.endereco}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                className="bg-gray-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={prevStep}
                disabled={step === 1} // Desabilitar o botão voltar na primeira etapa
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Próximo
              </button>
            </div>
          </form>
        )}

        {/* Etapa 2 - Dados de pagamento */}
        {step === 2 && (
          <form onSubmit={nextStep} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-semibold mb-6">Dados de Pagamento</h2>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Número do Cartão</label>
              <input
                type="text"
                name="numeroCartao"
                value={formData.numeroCartao}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Validade do Cartão (MM/AA)</label>
              <input
                type="text"
                name="validadeCartao"
                value={formData.validadeCartao}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">CVV</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                className="bg-gray-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={prevStep}
              >
                Voltar
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Próximo
              </button>
            </div>
          </form>
        )}

        {/* Etapa 3 - Resumo de cobrança */}
        {step === 3 && (
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-semibold mb-6">Resumo de Cobrança</h2>
            <p className="mb-4"><strong>Nome:</strong> {formData.nome}</p>
            <p className="mb-4"><strong>Email:</strong> {formData.email}</p>
            <p className="mb-4"><strong>Endereço:</strong> {formData.endereco}</p>
            <p className="mb-4"><strong>Número do Cartão:</strong> {formData.numeroCartao.slice(-4).padStart(16, '*')}</p>
            <p className="mb-4"><strong>Valor do curso:</strong> R$ {courseValue !== null ? courseValue.toFixed(2) : 'N/A'}</p>
            <div className="flex justify-between">
              <button
                type="button"
                className="bg-gray-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={prevStep}
              >
                Voltar
              </button>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleSubmit}
              >
                Confirmar
              </button>
            </div>
          </div>
        )}

        {/* Modal de confirmação */}
        {showModal && <Modal onClose={handleModalClose} />}
      </div>
    </>
  );
};

export default MultiStepForm;
