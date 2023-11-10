import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import './Header.css'
import '../../index.css'

const Header = () => {
  const [isLogged, setIsLogged] = useState(true);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src="/img/ГРИНАТОМ_Лого2021 1.png" alt="logo" className="logotype" />
        <div className="text">
          <h1>гринатом</h1>
          <h2>Документы</h2>
        </div>
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