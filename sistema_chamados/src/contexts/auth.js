import { useState, createContext, useEffect } from "react";
import { auth, db } from "../services/firebaseConnection";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);

  function signIn(email, passowrd) {
    console.log(email);
    console.log(passowrd);
    alert("LOGADO COM SUCESSO");
  }

  // Cadastrar um novo user
  async function signUp(email, passowrd, name) {
    setLoadingAuth(true);

    await createUserWithEmailAndPassword(auth, email, passowrd)
      .then(async (value) => {
        let uid = value.user.uid;

        await setDoc(doc(db, "users", uid), {
          nome: name,
          avatarUrl: null,
        }).then(() => {
          let data = {
            uid: uid,
            nome: name,
            email: value.user.email,
            avatarUrl: null,
          };

          setUser(data);

          setLoadingAuth(false);
        });
      })
      .catch((error) => {
        console.log(error);
        setLoadingAuth(false);
      });
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user, // !! converte pra bool, se não tiver nada é false
        user,
        signIn,
        signUp,
        loadingAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
