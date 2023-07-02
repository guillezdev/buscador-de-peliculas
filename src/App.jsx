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

  const handleChange = (event) => {
    setSelectFilms(event.target.value);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Buscador de peliculas</h1>
        <form action="">
          <input
            type="text"
            placeholder="Avengers , The Matrix , Start Wars  . . ."
            onChange={handleChange}
            required
            value={selectFilms}
          />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              dispatch(getFilms(selectFilms));
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
