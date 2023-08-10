import { startLoadingFilms, setFilms } from "./filmsSlice";

const API_KEY = "e25a73ff";
const url = `https://www.omdbapi.com/?apikey=e25a73ff&s=`;

export function getFilms(film = "avengers" ,page = 1) {
  return (dispatch, getState) => {
    dispatch(startLoadingFilms());

    //TODO: Realizar peticion http
    fetch(`${url}${film}&page=${page}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(setFilms(json));
      })
      .catch((err) => console.error("Error en el fetch" + err));
  };
}
