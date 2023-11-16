import '../../index.css'
import './Footer.css'

const Footer = () => {
    return (
      <div className="footer">
        <p className="footer-copyright rosatom-fontFamily-regular">&#169; команда 1. 2023 год</p>
        <a className="footer-devs rosatom-fontFamily-regular" href="#dev">
          Команда разработчиков
        </a>
      </div>
    )
}

export default Footer;
