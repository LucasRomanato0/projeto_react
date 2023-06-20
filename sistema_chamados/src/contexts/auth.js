import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function signIn(email, passowrd) {
    console.log(email);
    console.log(passowrd);
    alert("LOGADO COM SUCESSO");
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user, // !! converte pra bool, se não tiver nada é false
        user,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
