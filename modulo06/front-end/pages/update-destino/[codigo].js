import { useEffect } from "react";
import style from "../../styles/Home.module.css";
import { useRouter } from 'next/router';
import { useDestino } from "@/hooks/useDestino";
import Head from 'next/head'

const UpdateDestino = () => {
  const { destino, handleInputChange, buscarDestino, atualizarDestino } = useDestino()
  const router = useRouter();
  const { codigo } = router.query;

  useEffect(() => {
    buscarDestino(codigo)
  }, [codigo]);

  return (
    <>
      <Head>
        {/* (código do Head) */}
      </Head>

      <div className="container mb-2 mt-2" style={{ margin: "0 auto" }}>
        <h1 className={style.h1}>Atualizar Destino</h1>

        <div className="col-md col-lg">
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="id" className="form-label">ID do Destino:</label>
              <input readOnly type="text" className="form-control" id="id" value={codigo} name="id" />
            </div>

            <div className="col-sm-6">
              <label htmlFor="nome" className="form-label">Nome</label>
              <input required type="text" className="form-control" id="nome" value={destino.nome} onChange={handleInputChange} name="nome" />
            </div>

            <div className="col-sm-6">
              <label htmlFor="valor" className="form-label">Valor</label>
              <input type="text" className="form-control" id="valor" name="valor" value={destino.valor} onChange={handleInputChange} required />
            </div>

            <div className="col-sm-6">
              <label htmlFor="imagem" className="form-label">Imagem URL</label>
              <input type="text" className="form-control" id="imagem" name="imagem" placeholder="http://imagem.com" value={destino.imagem} onChange={handleInputChange} required />
            </div>

            <div className="col">
              <label htmlFor="descricao" className="form-label">Descrição</label>
              <textarea style={{ resize: "none" }} type="text" className="form-control" id="descricao" name="descricao" value={destino.descricao} onChange={handleInputChange} required rows={3} />
            </div>

            <br />
            <button
              className="w-100 btn btn-primary btn-lg"
              onClick={atualizarDestino}
            >
              Atualizar Destino
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateDestino;
