import React from "react"
import "./MainHeader.css"
import { observer } from "mobx-react-lite"
import { appStore } from "../../store/store"
import refresh_icon from "./../../assets/icons/icon-refreshpage.svg"
import CustomInput from "../CustomInput/CustomInput"
import { getAllFiles, getAllFolders } from "../../API/axios.api"
const MainHeader = () => {
  const handleRefreshTable = () => {
    getAllFiles()
    getAllFolders()
    appStore.setCategoryFilter("")
  }

  return (
    <div className="main-header">
      <div className="main-refresh">
        <img src={refresh_icon} alt="" onClick={(event) => handleRefreshTable()} />
        <h1>{appStore.categoryFilter.length > 0 ? appStore.categoryFilter : "Все файлы"}</h1>
      </div>
      <div className="main-input">
        <CustomInput placeholder="Поиск документа" showButton={true} />
      </div>
    </div>
  )
}

export default observer(MainHeader)
