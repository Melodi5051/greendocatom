import "./NoNetworkPage.css";
import noNetwork_icon from "./../../assets/icons/icon-no-network.png"
const NoNetworkPage = () => {
  return (
    <div className="centered-container rosatom-fontFamily-regular">
      <div className="icon">
        <img src={noNetwork_icon} alt=""></img>
      </div>
      <div className="promo-message">
        <div className="promo-title">Нет подключения к Интернету</div>
        <div className="promo-body-text">Проверьте подключение к Интернету.</div>
      </div>
      <button className="reload-button">Повторить</button>
    </div>
  )
}

export default NoNetworkPage;
