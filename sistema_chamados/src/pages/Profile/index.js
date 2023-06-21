import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import { FiSettings } from "react-icons/fi";

export default function Profile() {
  return (
    <div>
      <Navbar />

      <div className="content">
        <Title name="Minha conta">
          <FiSettings size={25} />
        </Title>
      </div>

      <h1>Pagina perfil</h1>
    </div>
  );
}
