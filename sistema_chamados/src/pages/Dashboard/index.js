import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

import Navbar from "../../components/Navbar";
import Title from "../../components/Title";

import "./dashboard.css";
import { FiEdit2, FiMessageSquare, FiPlus, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { logout } = useContext(AuthContext);

  async function handleLogout() {
    await logout();
  }

  return (
    <div>
      <Navbar />

      <div className="content">
        <Title name="Chamados">
          <FiMessageSquare size={25} />
        </Title>

        <>
          <Link to="/new" className="new">
            <FiPlus color="#FFF" size={25} />
            Novo chamado
          </Link>

          <table>
            <thead>
              <tr>
                <th scope="col">Cliente</th>
                <th scope="col">Assunto</th>
                <th scope="col">Status</th>
                <th scope="col">Cadastrado em</th>
                <th scope="col">#</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td data-label="Cliente">Mercado Esquina</td>
                <td data-label="Assunto">Suporte</td>
                <td data-label="Status">Aberto</td>
                <td data-label="Cadastrado em">23/06/2023</td>
                <td data-label="#">
                  <button
                    className="action"
                    style={{ backgroundColor: "#3583f6" }}
                  >
                    <FiSearch color="#FFF" size={17} />
                  </button>
                  <button
                    className="action"
                    style={{ backgroundColor: "#f6a935" }}
                  >
                    <FiEdit2 color="#FFF" size={17} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      </div>
    </div>
  );
}
