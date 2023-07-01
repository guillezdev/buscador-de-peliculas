import { startLoadingFilms, setFilms } from "./filmsSlice";

const API_KEY = "e25a73ff";
const url = `http://www.omdbapi.com/?apikey=e25a73ff&s=`;

export function getFilms(film = "avengers") {
    
  return (dispatch, getState) => {
    dispatch(startLoadingFilms());

    //TODO: Realizar peticion http
    fetch(`${url}${film}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(setFilms(json));
      });
  };
}
