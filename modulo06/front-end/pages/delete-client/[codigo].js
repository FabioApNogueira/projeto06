import { useRouter } from "next/router";
import { useCliente } from "@/hooks/useCliente";
import { useState } from "react";

const DeleteClient = () => {
  const router = useRouter();
  const { codigo } = router.query;
  const { deleteCliente } = useCliente();
  const [clientId, setClientId] = useState(codigo);

  const handleDelete = () => {
    deleteCliente(clientId);
  };

  return (
    <div>
      <h1>Excluir Cliente</h1>
      <table style={{ marginLeft: "20px" }}>
        <tbody>
          <tr>
            <td>
              <label>ID do Cliente a ser excluído:</label>
            </td>
            <td>
              <input
                readOnly
                type="text"
                value={clientId}
                onChange={(e) => setClientId(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button onClick={handleDelete}>Excluir Cliente</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DeleteClient;
