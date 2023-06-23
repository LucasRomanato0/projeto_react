import { FiPlusCircle } from "react-icons/fi";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import "./new.css";
import { useState } from "react";

export default function New() {
  const [customers, setCustomers] = useState([]);

  const [complemento, setComplemento] = useState("");
  const [assunto, setAssunto] = useState("Suporte");
  const [status, setStatus] = useState("Aberto");

  function handleOptionChange(e) {
    setStatus(e.target.value);
  }

  return (
    <div>
      <Navbar />

      <div className="content">
        <Title name="Novo chamado">
          <FiPlusCircle size={25} />
        </Title>

        <div className="container">
          <form className="form-profile">
            <label>Clientes</label>
            <select>
              <option key={1} value={1}>
                Mercado Teste
              </option>
              <option key={2} value={2}>
                Loja informatica
              </option>
            </select>

            <label>Assunto</label>
            <select>
              <option value="Suporte">Suporte</option>

              <option value="Visita Técnica">Visita Técnica</option>

              <option value="Financeiro">Financeiro</option>
            </select>

            <label>Status</label>
            <div className="status">
              <input
                type="radio"
                name="radio"
                value="Aberto"
                onChange={handleOptionChange}
                checked={status === "Aberto"}
              />
              <span>Em aberto</span>

              <input
                type="radio"
                name="radio"
                value="Progresso"
                onChange={handleOptionChange}
                checked={status === "Progresso"}
              />
              <span>Progresso</span>

              <input
                type="radio"
                name="radio"
                value="Fechado"
                onChange={handleOptionChange}
                checked={status === "Fechado"}
              />
              <span>Fechado</span>
            </div>

            <label>Complemento</label>
            <textarea
              type="text"
              placeholder="Descreva seu problema (opicional)."
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
            />

            <button type="submit">Registrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
