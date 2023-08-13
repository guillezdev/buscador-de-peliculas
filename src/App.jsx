import "./App.css";
import { Films } from "./components/Films";
import { useDispatch, useSelector } from "react-redux";
import { getFilms } from "./store/slices/films/thunks";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import { setPage, setResetPage, setType } from "./store/slices/films/filmsSlice";

function App() {
  const [selectFilms, setSelectFilms] = useState("");
  const page = useSelector((state) => state.films.page)
  const typeFilm = useSelector((state) => state.films.type)
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
          dispatch(getFilms(selectFilms, page, typeFilm));
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
        <div>
          <button onClick={(e) => {
            e.preventDefault();
            dispatch(setPage());
            dispatch(getFilms(selectFilms, page, typeFilm))
          }} >Next page</button>
          <button onClick={(e) => {
            e.preventDefault();
            dispatch(setResetPage());
            dispatch(getFilms(selectFilms, 1, typeFilm))
          }} >reset page</button>
        </div>
        <div className="filter-container">
          <p>Filtrar por:</p>
          <button onClick={() => dispatch(setType('movie'))}>Movies</button>
          <button onClick={() => dispatch(setType('series'))}>Series</button>
          <button onClick={() => dispatch(setType('episode'))}>Episode</button>
          <button onClick={() => dispatch(setType(''))}>Reset</button>
        </div>
      </header>
      <hr />
      <Films />
      <Footer />
    </div>
  );
}


export default App;
