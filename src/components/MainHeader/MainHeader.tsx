import React from "react"
import "./MainHeader.css"
import { observer } from "mobx-react-lite"
import { appStore } from "../../store/store"
import refresh_icon from "./../../assets/icons/icon-refreshpage.svg"
const MainHeader = () => {
  return (
    <div className="main-header">
      <div className="main-refresh">
        <img src={refresh_icon} alt="" />
        <h1>{appStore.categoryFilter.length > 0 ? appStore.categoryFilter : "Все файлы"}</h1>
      </div>
      <div className="main-input"></div>
    </div>
  )
}

export default observer(MainHeader)
