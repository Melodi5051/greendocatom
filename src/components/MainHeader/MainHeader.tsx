import React from "react"
import "./MainHeader.css"
import { observer } from "mobx-react-lite"
import { appStore } from "../../store/store"
import refresh_icon from "./../../assets/icons/icon-refreshpage.svg"
import CustomInput from "../CustomInput/CustomInput"
import { getAllFiles, getAllFolders } from "../../API/axios.api"
import arrayBack from "./../../assets/icons/icon-back.svg"
import { Link, useLocation } from "react-router-dom"
import { IYandexDiskFile } from "../../types/Files"

const MainHeader = () => {
  const location = useLocation()
  const handleRefreshTable = () => {
    getAllFiles()
    getAllFolders()
    appStore.setCategoryFilter("")
    appStore.setSubstring("")
  }
  return (
    <div className="main-header">
      <div className="main-refresh">
        {appStore.categoryFilter.length > 0 ? (
          // когда в файле
          <Link to={"/"}>
            <img
              src={arrayBack}
              alt=""
              onClick={() => {
                appStore.setCategoryFilter(appStore.categoryTemp);
                appStore.saveToLocalStorage();
              }}
            />
          </Link>
        ) : null}
        {appStore.categoryFilter.length > 0 ? (
          null
        ) :
          <Link to={"/"}>
            <img
              src={refresh_icon}
              alt=""
              onClick={(event) => handleRefreshTable()}
            />
          </Link>
        }
        <h1>
          {appStore.categoryFilter.length > 0
            ? appStore.categoryFilter
            : location.pathname === "/basket"
              ? "Удаленные файлы"
              : "Все файлы"}
        </h1>
      </div>
      {appStore.categoryFilter.length > 0 ? (
        null
      ) :
        <div className="main-input">
          <CustomInput placeholder="Поиск документа" showButton={true} />
        </div>}
    </div>
  )
}

export default observer(MainHeader)