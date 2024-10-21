import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav>
      <ul className="aside">
        <li>
          <NavLink to="/">
            Онлайн Кинотеатр
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/serial"
          >
            Сериалы
          </NavLink>
        </li>
        <li>
          <NavLink to="/cartoon">
            Мультфильмы
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio">
            Мои работы
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
