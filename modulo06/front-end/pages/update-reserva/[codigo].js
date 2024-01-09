import { useEffect } from "react";
import style from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { useCliente } from "@/hooks/useCliente";
import { useDestino } from "@/hooks/useDestino";
import { useReserva } from "@/hooks/useReserva";
import Head from 'next/head';

const UpdateReserva = () => {
  const router = useRouter();
  const { codigo } = router.query;
  const { reserva, handleInputChange, handleInputChangeCliente, handleInputChangeDestino, buscarReserva, atualizarReserva, cliente, destino } = useReserva();
  const { clients, listarClientes } = useCliente();
  const { destinos, listarDestinos } = useDestino();

  useEffect(() => {
    buscarReserva(codigo);
    listarClientes();
    listarDestinos();
  }, [codigo]);

  useEffect(() => {
    console.log(cliente);
    console.log(destino);
  }, [reserva]);

  return (
    <>
      <Head>
        {/* (código do Head) */}
      </Head>

      <div className="container mb-2 mt-2" style={{ margin: "0 auto" }}>
        <h1 className={style.h1}>Atualizar Reserva</h1>

        <div className="col-md col-lg">
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="id" className="form-label">ID da Reserva:</label>
              <input readOnly type="text" className="form-control" id="id" value={codigo} name="id" />
            </div>

            <div className="col-sm-6">
              <label htmlFor="data" className="form-label">Data</label>
              <input required type="datetime-local" className="form-control" id="data" value={reserva.data} onChange={handleInputChange} name="data" />
            </div>

            <div className="col-sm-6">
              <label htmlFor="client" className="form-label">Cliente:</label>
              <select
                className="form-control"
                id="cliente"
                name="cliente"
                required
                value={cliente.id}
                onChange={handleInputChangeCliente}
              >
                {clients.map(({ id, nome }) => (
                  <option key={id} value={id}>
                    {nome}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-sm-6">
              <label htmlFor="destino" className="form-label">Destino</label>
              <select
                className="form-control"
                id="destino"
                name="destino"
                required
                value={destino.id}
                onChange={handleInputChangeDestino}
              >
                {destinos.map(({ id, nome }) => (
                  <option key={id} value={id}>
                    {nome}
                  </option>
                ))}
              </select>
            </div>

            <br />
            <button
              className="w-100 btn btn-primary btn-lg"
              onClick={atualizarReserva}
            >
              Atualizar Reserva
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateReserva;
