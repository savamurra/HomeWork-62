import { MoviePropsMutation } from "../../types";
import * as React from "react";

interface Props {
  movies: MoviePropsMutation;
}

const SerialItem: React.FC<Props> = ({ movies }) => {
  return (
    <div className="movieCard">
      <img src={movies.poster} alt={movies.poster} className="img" />
      <h2 className="movieTitle">{movies.title}</h2>
      <p className="movieYear">
        {movies.year}, {movies.genre}
      </p>
      <p className="rating">{movies.rating}</p>
    </div>
  );
};

export default SerialItem;
