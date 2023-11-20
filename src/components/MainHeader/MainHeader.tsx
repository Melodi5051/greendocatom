import React from "react"
import "./MainHeader.css"
import { observer } from "mobx-react-lite"
import { appStore } from "../../store/store"
import refresh_icon from "./../../assets/icons/icon-refreshpage.svg"
import CustomInput from "../CustomInput/CustomInput"
import {} from "../../API/axios.api"
import arrayBack from "./../../assets/icons/icon-back.svg"
import { Link, useLocation } from "react-router-dom"
import { getAllFiles, getAllFolders } from "../../API/apiGetAll"

const MainHeader = () => {
  const location = useLocation()
  const handleRefreshTable = () => {
    getAllFiles()
    getAllFolders()
    appStore.setCategoryFilter("")
    appStore.setSubstring("")
  }

  const renderBackIcon = () => {
    if (appStore.categoryFilter.length > 0) {
      return (
        <div className="main-back">
          <Link to={"/"}>
            <img
              src={arrayBack}
              alt=""
              onClick={() => {
                appStore.setCategoryFilter(appStore.categoryTemp);
              }}
            />
          </Link>
        </div>
      );
    }
    return null;
  };

  const renderRefreshIcon = () => {
    if (appStore.categoryFilter.length === 0) {
      return (
        <Link to={"/"}>
          <img
            src={refresh_icon}
            alt=""
            onClick={(event) => handleRefreshTable()}
          />
        </Link>
      );
    }
    return null;
  };

  return (
    <div className="main-header">
      <div className="main-refresh">
        {renderBackIcon()}
        {renderRefreshIcon()}
        <h1>
          {appStore.categoryFilter.length > 0
            ? appStore.categoryFilter
            : location.pathname === "/basket"
              ? "Удаленные файлы"
              : "Все файлы"}
        </h1>
      </div>
      {appStore.categoryFilter.length === 0 && (
        <div className="main-input">
          <CustomInput placeholder="Поиск документа" showButton={true} />
        </div>
      )}
    </div>
  )
}

export default observer(MainHeader)

