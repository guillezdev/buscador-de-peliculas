import "./App.css";
import { Films } from "./components/Films";
import { useDispatch } from "react-redux";
import { getFilms } from "./store/slices/films/thunks";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

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
        <form onSubmit={(e) => {
              e.preventDefault();
              dispatch(getFilms(selectFilms));
            }}>
          <input
            type="text"
            placeholder="Avengers , The Matrix , Start Wars  . . ."
            onChange={handleChange}
            required
            value={selectFilms}
          />
          <button
            type="submit"
          >
            Buscar
          </button>
        </form>
      </header>
      <hr />
      <Films />
      <Footer />
    </div>
  );
}

export default App;
