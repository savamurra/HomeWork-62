import './Sidebar.css';

const Sidebar = () => {
  return (
    <nav>
      <ul className="aside">
        <li><a href="#">Онлайн Кинотеатр</a></li>
        <li><a href="#" className="current">Фильмы</a></li>
        <li><a href="#">Сериалы</a></li>
        <li><a href="#">Телеканалы</a></li>
        <li><a href="#">Спорт</a></li>
      </ul>
    </nav>
  );
};

export default Sidebar;