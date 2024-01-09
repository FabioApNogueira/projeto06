import { useCliente } from "@/hooks/useCliente";
import Head from 'next/head';

const AddClient = () => {
  const { client, handleInputChange, criarCliente } = useCliente();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="styles/style.css" />
        <link rel="stylesheet" href="styles/mediaquery.css" />
        <script src="https://unpkg.com/@phosphor-icons/web"></script>
        <title>FnViagens - Cadastrar Cliente</title>
      </Head>

      <div className="container mb-2 mt-2" style={{ margin: "0 auto" }}>
        <h1>Cadastrar Cliente</h1>
        <div className="row">
          <div className="col-md col-lg">
            <div className="row g-3">
              {[
                { label: "Nome", type: "text", id: "nome", name: "nome" },
                { label: "E-mail", type: "email", id: "email", name: "email", placeholder: "nome@exemplo.com", required: true },
                { label: "Telefone", type: "text", id: "telefone", name: "telefone", placeholder: "Ex.: 11 99999-9999", required: true },
                { label: "CPF", type: "text", id: "cpf", name: "cpf", required: true },
                { label: "Data de Nascimento", type: "date", id: "dataNascimento", name: "dataNascimento", required: true },
                { label: "Senha", type: "password", id: "senha", name: "senha", required: true },
              ].map((inputProps) => (
                <div className="col-sm-6" key={inputProps.id}>
                  <label htmlFor={inputProps.id} className="form-label">{inputProps.label}</label>
                  <input
                    type={inputProps.type}
                    className="form-control"
                    id={inputProps.id}
                    name={inputProps.name}
                    placeholder={inputProps.placeholder}
                    value={client[inputProps.name]}
                    onChange={handleInputChange}
                    required={inputProps.required}
                  />
                </div>
              ))}
              <br />
              <button
                className="w-100 btn btn-primary btn-lg"
                onClick={criarCliente}
              >
                Inserir Cliente
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddClient;
