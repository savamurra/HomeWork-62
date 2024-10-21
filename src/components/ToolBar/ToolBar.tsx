import './Toolbar.css';
import { NavLink } from 'react-router-dom';
const ToolBar = () => {

  const logon = "https://dynamic.design.com/asset/logo/930237d4-5e82-49da-82ec-3568955dbbc7/logo-search-grid-2x?logoTemplateVersion=1&v=638585330670630000&text=Movie+"
  return (
    <header className="header">
      <a href="#"><img src={logon} alt='logo' className="logo"/></a>
      <div className="headerMiddle">
        <NavLink className="header-info" to='/'>Бестселлеры</NavLink>
        <NavLink className="header-info" to='/'>Каталог</NavLink>
      </div>
      <form>
        <input placeholder="Введите название фильма" type="text"/>
        <button type="button" className="search-btn">Найти</button>
      </form>
    </header>
  );
};

export default ToolBar;