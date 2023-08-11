import { startLoadingFilms, setFilms } from "./filmsSlice";

const API_KEY = "e25a73ff";
const url = `https://www.omdbapi.com/?apikey=e25a73ff`;

export function getFilms(film = "harry potter" ,page = 1 ,type = '') {
  return (dispatch, getState) => {
    dispatch(startLoadingFilms());

    //TODO: Realizar peticion http
    fetch(`${url}&s=${film}&page=${page}&type=${type}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(setFilms(json));
      })
      .catch((err) => console.error("Error en el fetch" + err));
  };
}
