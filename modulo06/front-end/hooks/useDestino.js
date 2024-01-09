import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export const useDestino = () => {
  const router = useRouter();
  const URL = 'https://localhost:7146/api/Destinos';
  const [destino, setDestino] = useState({
    id: 0,
    nome: null,
    valor: null,
    descricao: null,
    imagem: null,
  });
  const [destinos, setDestinos] = useState([]);

  const handleInputChange = (e) => {
    setDestino({ ...destino, [e.target.name]: e.target.value });
  };

  const fetchData = async (config) => {
    try {
      const response = await axios(config);
      return response.data;
    } catch (error) {
      console.error('Erro na requisição: ', error);
      throw error;
    }
  };

  const listarDestinos = async () => {
    try {
      const data = await fetchData({ method: 'get', url: URL });
      setDestinos(data);
    } catch (error) {
      console.error('Erro ao buscar a lista de destinos: ', error);
    }
  };

  const criarAtualizarDestino = async (method, data, id = '') => {
    try {
      await fetchData({
        method: method,
        url: `${URL}/${id}`,
        data: data,
      });
      router.push('/destino');
    } catch (error) {
      alert(`Erro ao ${method === 'post' ? 'inserir' : 'atualizar'} destino: ${error}`);
    }
  };

  const criarDestino = () => {
    criarAtualizarDestino('post', destino);
  };

  const buscarDestino = async (codigo) => {
    try {
      const data = await fetchData({ method: 'get', url: `${URL}/${codigo}` });
      setDestino(data);
    } catch (error) {
      console.error('Erro ao buscar detalhes do destino: ', error);
    }
  };

  const atualizarDestino = () => {
    criarAtualizarDestino('put', destino, destino.id);
  };

  const deleteDestino = async (codigo) => {
    try {
      await fetchData({ method: 'delete', url: `${URL}/${codigo}` });
      listarDestinos();
    } catch (error) {
      alert(`Erro ao excluir destino: ${error}`);
    }
  };

  return {
    destino,
    destinos,
    handleInputChange,
    listarDestinos,
    criarDestino,
    buscarDestino,
    atualizarDestino,
    deleteDestino,
  };
};
