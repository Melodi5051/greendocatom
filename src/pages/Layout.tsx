import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Main from "../components/Main/Main"
import { observer } from "mobx-react-lite"
import { getAllFiles, getAllFolders } from "../API/axios.api"
import { useEffect } from "react"
import Router from "../router/router"
const Layout = () => {
  useEffect(() => {
    getAllFiles()
    getAllFolders()
  }, [])
  return (
    <div className="layout">
      <Header />
      <Router />
      <Footer />
    </div>
  )
}

export default observer(Layout)
