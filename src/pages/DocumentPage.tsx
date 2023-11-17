import { useEffect, useState } from "react"
import DocumentDetails from "../components/DocumentDetails/DocumentDetails"
import DocumentViewer from "../components/DocumentView/DocumentViewer"
import { getAllFiles, getAllFolders } from "../API/axios.api"
import "./DocumentPage.css"
import { useParams } from "react-router-dom"
import { appStore } from "../store/store"
import { IYandexDiskFile } from "../types/Files"

const DocumentPage = () => {
  const { name } = useParams()
  const [loaded, setLoaded] = useState(false)
  const [helderSerchFullItem, setHelderSerchFullItem] = useState<IYandexDiskFile[]>([])
  useEffect(() => {
    Promise.all([getAllFolders(), getAllFiles()])
      .then(() => {
        const fullItem = appStore.arrayItems.filter((item) => item.name === name)
        setHelderSerchFullItem(fullItem)
        setLoaded(true)
      })
      .catch((error) => console.error("Error loading data: ", error))
  }, [name])

  if (!loaded) {
    return <span className="loader"></span>
  }
  return (
    <div className="document-page">
      <DocumentDetails
        name={helderSerchFullItem[0].name}
        path={helderSerchFullItem[0].path}
        modified={helderSerchFullItem[0].modified}
        created={helderSerchFullItem[0].created}
        size={helderSerchFullItem[0].size}
      />
      <DocumentViewer />
    </div>
  )
}

export default DocumentPage
