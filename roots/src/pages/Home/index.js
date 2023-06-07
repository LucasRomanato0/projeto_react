import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <h1>Bem vindo a página HOME</h1>
      <span>Sujeto Programador</span>
      <br />
      <br />

      <Link to="/sobre">Sobre</Link>
      <br />
      <Link to="/contato">Contato</Link>
    </div>
  );
}

export default Home;
