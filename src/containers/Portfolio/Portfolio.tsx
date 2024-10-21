import ToolBar from "../../components/ToolBar/ToolBar.tsx";
import { NavLink, Outlet } from "react-router-dom";

const Portfolio = () => {
  return (
    <div>
      <ToolBar />
      <div className="portfolio">
        <div className="navigation">
          <NavLink to="country" className="portNav">
            Страны
          </NavLink>
          <NavLink to="findcell" className="portNav">
            Найти колечко
          </NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Portfolio;
