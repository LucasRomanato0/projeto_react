import { useContext, useState } from "react";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import { FiSettings, FiUpload } from "react-icons/fi";
import avatar from "../../assets/avatar.png";
import { AuthContext } from "../../contexts/auth";

import { db, storage } from "../../services/firebaseConnection";
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import "./profile.css";

export default function Profile() {
  const { user, storageUser, setUser, logout } = useContext(AuthContext);

  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
  const [imgAvatar, setImgAvatar] = useState(null);
  const [nome, setNome] = useState(user && user.nome);
  const [email, setEmail] = useState(user && user.email);

  function handleFile(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (image.type === "image/jpeg" || image.type === "image/png") {
        setImgAvatar(image);
        setAvatarUrl(URL.createObjectURL(image));
      } else {
        alert("Envie uma imagem .png ou .jpeg");
        setImgAvatar(null);
        return;
      }
    }
  }

  async function handleUpload() {
    const currentUid = user.uid;

    const uploadRef = ref(storage, `images/${currentUid}/${imgAvatar.name}`);

    const uploadTask = uploadBytes(uploadRef, imgAvatar).then((snapshot) => {
      getDownloadURL(snapshot.ref).then(async (downloadURL) => {
        let urlFoto = downloadURL;

        const docRef = doc(db, "users", user.uid);
        await updateDoc(docRef, {
          avatarUrl: urlFoto,
          nome: nome,
        }).then(() => {
          let data = {
            ...user,
            nome: nome,
            avatarUrl: urlFoto,
          };

          setUser(data);
          storageUser(data);
        });
      });
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (imgAvatar == null && nome !== "") {
      // Atualizar apenas o nome do user
      const docRef = doc(db, "users", user.uid);

      await updateDoc(docRef, {
        nome: nome,
      }).then(() => {
        let data = {
          ...user,
          nome: nome,
        };

        setUser(data);
        storageUser(data);
      });
    } else if (nome !== "" && imgAvatar !== null) {
      // Atualizar os dois
      handleUpload();
    }
  }

  return (
    <div>
      <Navbar />

      <div className="content">
        <Title name="Minha conta">
          <FiSettings size={25} />
        </Title>

        <div className="container">
          <form className="form-profile" onSubmit={handleSubmit}>
            <label className="label-avatar">
              <span>
                <FiUpload color="#FFF" size={25} />
              </span>
              <input type="file" accept="image/*" onChange={handleFile} />{" "}
              <br />
              {avatarUrl == null ? (
                <img
                  src={avatar}
                  alt="Foto de perfil"
                  width={250}
                  height={250}
                />
              ) : (
                <img
                  src={avatarUrl}
                  alt="Foto de perfil"
                  width={250}
                  height={250}
                />
              )}
            </label>

            <label>Nome</label>
            <input
              type="text"
              placeholder={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <label>Email</label>
            <input type="email" placeholder={email} disabled={true} />

            <button type="submit">Salvar</button>
          </form>
        </div>

        <div className="container">
          <button className="logout-btn" onClick={() => logout()}>
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}
