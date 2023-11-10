import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import './Header.css'
import '../../index.css'

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <img src="/img/ГРИНАТОМ_Лого2021 2.png" alt="logo2" className="logotype" />
      <div className="links">
        <NavLink className='nav-link' to={"/documents"}>Документы</NavLink>
        <NavLink className='nav-link' to={"/categories"}>Категории</NavLink>
        <NavLink className='nav-link' to={"/userlist"}>Список пользователей</NavLink>
      </div>
      <div className="authorization">
        {isLogged ? (
          <div className="loggedIn">
            <img src="img/Customer.png" alt="userIcon" className="customer" />
            <div className="user-name">
              {"Имя"} {"Фамилия"}
            </div>
          </div>
        ) : (
          <div className="unloggined">
            <button className="login">Войти</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header