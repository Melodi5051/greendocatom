import React from "react"
import "./MainHeader.css"
import { observer } from "mobx-react-lite"
import { appStore } from "../../store/store"
import refresh_icon from "./../../assets/icons/icon-refreshpage.svg"
import CustomInput from "../CustomInput/CustomInput"
import { getAllFiles, getAllFolders } from "../../API/axios.api"
import arrayBack from "./../../assets/icons/icon-back.svg"
import { Link } from "react-router-dom"

const MainHeader = () => {
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
          <Link to={"/"}>
            <img
              src={arrayBack}
              alt=""
              onClick={() => appStore.setCategoryFilter(appStore.categoryTemp)}
            />
          </Link>
        ) : null}
        <Link to={"/"}>
          <img className="refresh_icon" src={refresh_icon} alt="" onClick={handleRefreshTable} />
        </Link>
        <h1>{appStore.categoryFilter.length > 0 ? appStore.categoryFilter : "Все файлы"}</h1>
      </div>

      <div className="main-input">
        <CustomInput placeholder="Поиск документа" showButton={false} />
      </div>
    </div>
  )
}

export default observer(MainHeader)

