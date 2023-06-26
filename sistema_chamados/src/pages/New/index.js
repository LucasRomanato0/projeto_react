import { FiPlusCircle } from "react-icons/fi";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import "./new.css";
import { useState, useEffect, useContext } from "react";

import { AuthContext } from "../../contexts/auth";
import { db } from "../../services/firebaseConnection";
import { collection, getDoc, getDocs, doc } from "firebase/firestore";

const listRef = collection(db, "customers");

export default function New() {
  const { user } = useContext(AuthContext);

  const [customers, setCustomers] = useState([]);
  const [customerSelected, setCustomerSelected] = useState(0);
  const [loadCustomer, setLoadCustomer] = useState(true);

  const [complemento, setComplemento] = useState("");
  const [assunto, setAssunto] = useState("Suporte");
  const [status, setStatus] = useState("Aberto");

  useEffect(() => {
    async function loadCustomers() {
      const querySnapshot = await getDocs(listRef)
        .then((snapshot) => {
          let lista = [];

          snapshot.forEach((doc) => {
            lista.push({
              id: doc.id,
              nomeEmpresa: doc.data().nomeEmpresa,
            });
          });

          if (snapshot.docs.size === 0) {
            console.log("NENHUMA EMPRESA ENCONTRADA");
            setCustomers([{ id: 1, nomeEmpresa: "FREELA" }]);
            setLoadCustomer(false);
            return;
          }

          setCustomers(lista);
          setLoadCustomer(false);
        })
        .catch((error) => {
          console.log("Erro ao buscar os clientes", error);
          setLoadCustomer(false);
          setCustomers([{ id: 1, nomeEmpresa: "FREELA" }]);
        });
    }

    loadCustomers();
  }, []);

  function handleOptionChange(e) {
    setStatus(e.target.value);
  }

  function handleChangeSelect(e) {
    setAssunto(e.target.value);
  }

  function handleChangeCustomer(e) {
    setCustomerSelected(e.target.value);
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
            {loadCustomer ? (
              <input type="text" disabled={true} value={"Carregando..."} />
            ) : (
              <select value={customerSelected} onChange={handleChangeCustomer}>
                {customers.map((item, index) => {
                  return (
                    <option key={index} value={index}>
                      {item.nomeEmpresa}
                    </option>
                  );
                })}
              </select>
            )}

            <label>Assunto</label>
            <select value={assunto} onChange={handleChangeSelect}>
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
