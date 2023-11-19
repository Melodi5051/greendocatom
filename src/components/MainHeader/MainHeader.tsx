import React, {useState} from "react"
import "./MainHeader.css"
import {observer} from "mobx-react-lite"
import {appStore} from "../../store/store"
import refresh_icon from "./../../assets/icons/icon-refreshpage.svg"
import CustomInput from "../CustomInput/CustomInput"
import {} from "../../API/axios.api"
import arrayBack from "./../../assets/icons/icon-back.svg"
import {Link, useLocation} from "react-router-dom"
import {getAllFiles, getAllFolders, getAllTrash} from "../../API/apiGetAll"

const MainHeader = () => {
  const location = useLocation()
  const [loading, setLoading] = useState(false)
  const handleRefreshTable = async () => {
    setLoading(true)
    getAllFolders()
    if (location.pathname === "/basket") {
      await getAllTrash()
    } else (
      await getAllFiles()
    )

    appStore.setSubstring("")
    setLoading(false)
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

        <img
          className={'refresh_icon' + (loading ? ' refresh_icon_active' : '')}
          src={refresh_icon}
          alt=""
          onClick={(event) => handleRefreshTable()}
        />

        <h1>
          {appStore.categoryFilter.length > 0
            ? appStore.categoryFilter
            : location.pathname === "/basket"
              ? "Удаленные файлы"
              : "Все файлы"}
        </h1>
      </div>
      <div className="main-input">
        <CustomInput placeholder="Поиск документа" showButton={true}/>
      </div>
    </div>
  )
}

export default observer(MainHeader)

