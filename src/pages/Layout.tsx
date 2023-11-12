import { useEffect, useState } from "react"
import { getAllFiles, getAllFolder } from "../API/axios.api"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Main from "../components/Main/Main"
import { getDownloadLink } from "../API/apiDisc"

const Layout = () => {
  const [link, setLink] = useState<string | undefined>('');
  useEffect(() => {
    getAllFolder()
    getAllFiles()
    getDownloadLink("disk:/CaseLabDocuments/университет/React_Basics.pdf").then(linkD => setLink(linkD))
  }, [])
  return (
    <div className="layout">
      
      <Header />
      <a href={link}>Link</a>
      <Main />
      <Footer />
    </div>
  )
}

export default Layout
