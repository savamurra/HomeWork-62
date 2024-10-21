import { MovieProps } from '../../types';
import * as React from 'react';
import Movie from './MovieItem.tsx';

interface ItemProps {
  movieCard: MovieProps[]
}

const MovieItem: React.FC<ItemProps> = ({movieCard}) => {
  return (
    <div className='contentRender'>
      {movieCard.map((movie) => (
        <Movie key={movie.id} movies={movie}/>
      ))}
    </div>
  );
};

export default MovieItem;