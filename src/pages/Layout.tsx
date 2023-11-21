import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Main from "../components/Main/Main"
import NoNetworkPage from "../components/NoNetworkPage/NoNetworkPage"
import { useEffect, useState } from "react"
import { getAllFiles, getAllFolders } from "../API/apiGetAll"
import { useNavigate } from "react-router-dom"
import { appStore } from "../store/store"

const Layout = () => {
  const history = useNavigate()
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  useEffect(() => {
    const handlePopstate = () => {
      appStore.setCategoryFilter("")
    }
    window.addEventListener("popstate", handlePopstate)
    return () => {
      window.removeEventListener("popstate", handlePopstate)
    }
  }, [history])
  useEffect(() => {
    const checkOnlineStatus = () => {
      setIsOnline(navigator.onLine)
    }
    window.addEventListener("online", checkOnlineStatus)
    window.addEventListener("offline", checkOnlineStatus)
    checkOnlineStatus()
    return () => {
      window.removeEventListener("online", checkOnlineStatus)
      window.removeEventListener("offline", checkOnlineStatus)
    }
  }, [])
  useEffect(() => {
    if (isOnline) {
      getAllFolders()
      getAllFiles()
    }
  }, [isOnline])
  return (
    <>
      <div style={{ display: isOnline ? "flex" : "none" }} className="layout">
        <Header />
        <Main />
        <Footer />
      </div>
      <div style={{ display: isOnline ? "none" : "block" }}>
        <NoNetworkPage />
      </div>
    </>
  )
}

export default Layout
