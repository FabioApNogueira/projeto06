import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const useCliente = () => {
  const router = useRouter();
  const URL = 'https://localhost:7146/api/Clientes';
  const [client, setClient] = useState({
    id: 0,
    nome: '',
    email: '',
    cpf: '',
    dataNascimento: '',
    telefone: '',
  });
  const [clients, setClients] = useState([]);

  const handleInputChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const listarClientes = () => {
    axios
      .get(URL)
      .then((response) => {
        setClients(response.data);
        console.log('Listando clientes');
      })
      .catch((error) => {
        console.error('Erro ao buscar a lista de clientes: ', error);
      });
  };

  const criarCliente = () => {
    axios
      .post(URL, client)
      .then(() => {
        router.push('/cliente');
      })
      .catch((error) => {
        alert('Erro ao inserir cliente: ' + error);
      });
  };

  const buscarCliente = (codigo) => {
    axios
      .get(`${URL}/${codigo}`)
      .then((response) => {
        setClient(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar detalhes do cliente: ', error);
      });
  };

  const atualizarCliente = () => {
    axios
      .put(`${URL}/${client.id}`, client)
      .then(() => {
        router.push('/cliente');
      })
      .catch((error) => {
        console.error('Erro ao atualizar cliente: ', error);
      });
  };

  const deleteCliente = (codigo) => {
    axios
      .delete(`${URL}/${codigo}`)
      .then(() => {
        listarClientes();
      })
      .catch((error) => {
        alert('Erro ao excluir cliente: ' + error);
      });
  };

  return {
    client,
    clients,
    handleInputChange,
    listarClientes,
    criarCliente,
    buscarCliente,
    atualizarCliente,
    deleteCliente,
  };
};

export default useCliente;
