import './Sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav>
      <ul className="aside">
        <li><NavLink to="/"  className={({isActive, isPending}) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }>Онлайн Кинотеатр
        </NavLink></li>
        <li><NavLink to="/serial" className={({isActive, isPending}) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }>Сериалы
        </NavLink></li>
        <li><NavLink to="/cartoon" className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }>Мультфильмы
        </NavLink></li>
      </ul>
    </nav>
  );
};

export default Sidebar;