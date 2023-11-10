import './Header.css'
import logo from './../../assets/ГРИНАТОМ_Лого2021 1.png'

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" className="logo-img" />
        <div className="logo-text rosatom-fontFamily-regular">
          <h1>грин<span>атом</span></h1>
          <h2>Документы</h2>
        </div>
      </div>
      {/* <div className="authorization">
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
      </div> */}
    </div>
  );
}

export default Header