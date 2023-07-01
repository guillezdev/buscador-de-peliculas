import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { getFilms } from "./store/slices/thunks.js";
import { useEffect } from "react";

function App() {
  const { films, isLoading } = useSelector((state) => state.films);
  useEffect(() => {
    getFilms();
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>Buscador de peliculas</h1>
        <form action="">
          <input
            type="text"
            placeholder="Avengers , The Matrix , Start Wars  . . ."
          />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              console.log(films, isLoading);
            }}
          >
            Buscar
          </button>
        </form>
        <hr />
        <main className="films">Aqui van las pelicula...</main>
      </header>
    </div>
  );
}

export default App;
