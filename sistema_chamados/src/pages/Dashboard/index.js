import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

import Navbar from "../../components/Navbar";

export default function Dashboard() {
  const { logout } = useContext(AuthContext);

  async function handleLogout() {
    await logout();
  }

  return (
    <div>
      <Navbar />
      <h1>Tela dashboard</h1>
      <button onClick={handleLogout}>Sair da conta</button>
    </div>
  );
}
