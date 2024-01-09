import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useCliente } from './useCliente';
import { useDestino } from './useDestino';

export const useReserva = () => {
  const { clients, listarClientes } = useCliente();
  const { destinos, listarDestinos } = useDestino();

  const router = useRouter();
  const URL = 'https://localhost:7146/api/Reservas';

  const [cliente, setCliente] = useState({ id: clients.length > 0 ? clients[0].id : null });
  const [destino, setDestino] = useState({ id: destinos.length > 0 ? destinos[0].id : null });
  const [reserva, setReserva] = useState({ id: 0, cliente: { ...cliente }, destino: { ...destino }, data: '' });
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    listarClientes();
    listarDestinos();
  }, []);

  useEffect(() => {
    setReserva((prevReserva) => ({ ...prevReserva, cliente: { ...cliente } }));
  }, [cliente]);

  useEffect(() => {
    setReserva((prevReserva) => ({ ...prevReserva, destino: { ...destino } }));
  }, [destino]);

  const handleInputChange = (e) => {
    setReserva({ ...reserva, [e.target.name]: e.target.value });
  };

  const handleInputChangeCliente = (e) => {
    setCliente({ id: Number.parseInt(e.target.value) });
  };

  const handleInputChangeDestino = (e) => {
    setDestino({ id: Number.parseInt(e.target.value) });
  };

  const listarReservas = () => {
    axios
      .get(URL)
      .then((response) => {
        setReservas(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar a lista de reservas: ', error);
      });
  };

  const criarReserva = () => {
    const novaReserva = {
      id: reserva.id,
      clienteId: reserva.cliente.id,
      destinoId: reserva.destino.id,
      data: reserva.data,
    };
    axios
      .post(URL, novaReserva)
      .then((response) => {
        router.push('/reserva');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const buscarReserva = (codigo) => {
    axios
      .get(`${URL}/${codigo}`)
      .then((response) => {
        setReserva(response.data);
        setCliente(response.data.cliente);
        setDestino(response.data.destino);
      })
      .catch((error) => {
        console.error('Erro ao buscar detalhes da reserva: ', error);
      });
  };

  const atualizarReserva = () => {
    const novaReserva = {
      id: reserva.id,
      clienteId: reserva.cliente.id,
      destinoId: reserva.destino.id,
      data: reserva.data,
    };
    axios
      .put(`${URL}/${reserva.id}`, novaReserva)
      .then((response) => {
        router.push('/reserva');
      })
      .catch((error) => {
        console.error('Erro ao atualizar reserva: ', error);
      });
  };

  const deleteReserva = (codigo) => {
    axios
      .delete(`${URL}/${codigo}`)
      .then(() => {
        listarReservas();
      })
      .catch((error) => {
        alert('Erro ao excluir reserva: ' + error);
      });
  };

  return {
    cliente,
    handleInputChangeCliente,
    destino,
    handleInputChangeDestino,
    reserva,
    reservas,
    handleInputChange,
    listarReservas,
    criarReserva,
    buscarReserva,
    atualizarReserva,
    deleteReserva,
  };
};
