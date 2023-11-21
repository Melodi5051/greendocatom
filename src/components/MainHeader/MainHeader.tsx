import "./MainHeader.css"
import { useState } from "react"
import { observer } from "mobx-react-lite"
import { appStore } from "../../store/store"
import refresh_icon from "./../../assets/icons/icon-refreshpage.svg"
import CustomInput from "../CustomInput/CustomInput"
import arrayBack from "./../../assets/icons/icon-back.svg"
import { Link, useLocation } from "react-router-dom"
import { getAllFiles, getAllFolders, getAllTrash } from "../../API/apiGetAll"

const MainHeader = () => {
  const location = useLocation()
  const [loading, setLoading] = useState(false)
  const handleRefreshTable = async () => {
    setLoading(true)
    getAllFolders()
    if (location.pathname === "/basket") {
      await getAllTrash()
    } else await getAllFiles()
    appStore.setSubstring("")
    setLoading(false)
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
                appStore.setCategoryFilter(appStore.categoryTemp)
              }}
            />
          </Link>
        </div>
      )
    }
    return null
  }

  const renderRefreshIcon = () => {
    if (location.pathname === "/basket" || location.pathname === "/") {
      return (
        <img className={'refresh_icon' + (loading ? ' refresh_icon_active' : '')}
             src={refresh_icon} alt="" onClick={(event) => handleRefreshTable()}/>
      )
    }
    return null
  }

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
      {appStore.categoryFilter.indexOf("/") === -1 ? (
        <div className="main-input">
          <CustomInput placeholder="Поиск документа" showButton={true} />
        </div>
      ) : null}
    </div>
  )
}

export default observer(MainHeader)
