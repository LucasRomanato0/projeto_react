import { useEffect, useState } from "react";
import api from "../../services/api";

//https://api.themoviedb.org/3/movie/now_playing?api_key=978549951841bc006c66d82e0a93b3db&language=pt-BR

function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("/movie/now_playing", {
        params: {
          api_key: "978549951841bc006c66d82e0a93b3db",
          language: "pt-BR",
          page: 1,
        },
      });

      console.log(response.data.results);
    }

    loadFilmes();
  }, []);

  return (
    <div>
      <h1>BEM VINDO A HOME</h1>
    </div>
  );
}

export default Home;
