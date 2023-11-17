import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Main from "../components/Main/Main"
import { useEffect } from "react"
import { getAllFiles, getAllFolders } from "../API/apiGetAll"

const Layout = () => {
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
