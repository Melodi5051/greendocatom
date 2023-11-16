import './Header.css'
import logo from './../../assets/ГРИНАТОМ_Лого2021 1.png'
import { storeAside } from "../../store/storeAside"
import Tooltip from "../Tooltip/Tooltip"

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="logo" className="logo-img" />
        <div className="logo-text rosatom-fontFamily-regular">
          <h1>
            грин<span>атом</span>
          </h1>
          <h2>Документы</h2>
        </div>
      </div>
      <div className="button-burger" onClick={() => storeAside.setIsOpen(!storeAside.isOpen)}>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
      </div>
    </div>
  )
}

export default Header