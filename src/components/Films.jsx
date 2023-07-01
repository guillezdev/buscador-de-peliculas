import React from "react";

import { useSelector } from "react-redux";

export function Films() {
  const { films, isLoading } = useSelector((state) => state.films);

  return (
    <main className="films">
      {isLoading && <h2>Cargando Peliculas...</h2>}
      {films.length > 0 &&
        films.map((films) => {
          <div>
            <h2>{films.Title}</h2>
          </div>;
        })}
    </main>
  );
}
