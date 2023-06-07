import { Link } from "react-router-dom";

function Sobre() {
  return (
    <div className="App">
      <h1>Página sobre a impresa</h1>
      <br />
      <br />

      <Link to="/">Página Home</Link>
      <br />
      <Link to="/contato">Contato</Link>
    </div>
  );
}

export default Sobre;
