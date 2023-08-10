import "./App.css";
import { Films } from "./components/Films";
import { useDispatch, useSelector } from "react-redux";
import { getFilms } from "./store/slices/films/thunks";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import { setPage } from "./store/slices/films/filmsSlice";

function App() {
  const [selectFilms, setSelectFilms] = useState("");
  const page = useSelector((state) => state.films.page)
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
        <button onClick={(e) => {
          e.preventDefault();
          dispatch(setPage());
          dispatch(getFilms(selectFilms, page))
        }} >Next page</button>
      </header>
      <hr />
      <Films />
      <Footer />
    </div>
  );
}

export default App;
