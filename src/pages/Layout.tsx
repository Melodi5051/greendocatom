import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Main from "../components/Main/Main"
import { getAllFiles, getAllFolders } from "../API/axios.api"
import { useEffect } from "react"

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
