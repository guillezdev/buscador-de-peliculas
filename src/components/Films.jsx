import React from "react";

import { useSelector } from "react-redux";

export function Films() {
  const { films, isLoading } = useSelector((state) => state.films);

  return (
    <main className="films">
      {isLoading && <h2>Cargando Peliculas...</h2>}
      {!isLoading &&
        films?.length > 0 &&
        films.map((el) => {
          return (
            <div className="film" key={el.imdbID}>
              <h3>{el.Title}</h3>
              <p>Año:{el.Year}</p>
              <img src={el.Poster} alt={el.Poster} />
            </div>
          );
        })}
      {films?.Title == undefined && !isLoading && !films?.length > 0 && (
        <h2>No hay resultados para su busqueda.</h2>
      )}
    </main>
  );
}
