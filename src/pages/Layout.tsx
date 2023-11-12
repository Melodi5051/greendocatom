import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Main from "../components/Main/Main"
import { observer } from "mobx-react-lite"
import { getAllFiles, getAllFolders } from "../API/axios.api"
import { useEffect } from "react"
const Layout = () => {
  useEffect(() => {
    getAllFiles()
    getAllFolders()
  }, [])
  return (
    <div className="layout">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default observer(Layout)
