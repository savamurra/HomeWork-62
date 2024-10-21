import ToolBar from '../../components/ToolBar/ToolBar.tsx';
import Movie from '../../components/Movie/Movie.tsx';
import { MovieProps } from '../../types';
import * as React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar.tsx';
interface IProps {
  movies: MovieProps[]
}

const Home: React.FC<IProps> = ({movies}) => {
  return (
    <div>
      <ToolBar/>
      <div className='main'>
        <Sidebar/>
        <Movie movieCard={movies}/>
      </div>
    </div>
  );
};

export default Home;