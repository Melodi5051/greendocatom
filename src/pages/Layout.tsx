import { useEffect } from "react"
import { getAllFiles } from "../API/axios.api"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Main from "../components/Main/Main"

const Layout = () => {
  useEffect(() => {
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
