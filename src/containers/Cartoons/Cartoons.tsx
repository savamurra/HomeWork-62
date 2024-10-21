import ToolBar from "../../components/ToolBar/ToolBar.tsx";
import Sidebar from "../../components/Sidebar/Sidebar.tsx";
import { MovieProps } from "../../types";
import * as React from "react";

interface Props {
  movies: MovieProps[];
}

const Cartoons: React.FC<Props> = ({ movies }) => {
  return (
    <div>
      <ToolBar />
      <div className="main">
        <Sidebar />
        <Cartoons movies={movies} />
      </div>
    </div>
  );
};

export default Cartoons;
