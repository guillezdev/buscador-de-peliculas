import "./App.css";
import { Films } from "./components/Films";
import { useDispatch } from "react-redux";
import { getFilms } from "./store/slices/films/thunks";
import { useEffect, useState } from "react";

function App() {
  const [selectFilms, setSelectFilms] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilms());
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>Buscador de peliculas</h1>
        <form action="">
          <input
            type="text"
            placeholder="Avengers , The Matrix , Start Wars  . . ."
            onChange={(e) => setSelectFilms(e.target.value)}
            value={selectFilms}
          />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              dispatch(getFilms(selectFilms));
              console.log(selectFilms);
            }}
          >
            Buscar
          </button>
        </form>
      </header>
      <hr />
      <Films />
    </div>
  );
}

export default App;
