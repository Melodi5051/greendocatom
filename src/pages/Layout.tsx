import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Main from "../components/Main/Main"
import { useEffect } from "react"
import { getAllFiles, getAllFolders } from "../API/apiGetAll"
import { useNavigate } from "react-router-dom"
import { appStore } from "../store/store"

const Layout = () => {
  const history = useNavigate()
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
    getAllFolders()
    getAllFiles()
  }, [])
  return (
    <div className="layout">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Layout
