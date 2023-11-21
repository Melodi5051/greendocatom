import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import DocumentDetails from "../components/DocumentDetails/DocumentDetails"
import DocumentViewer from "../components/DocumentView/DocumentViewer"
import "./DocumentPage.css"
import {appStore} from "../store/store"
import {IYandexDiskFile} from "../types/Files"
import {getAllFiles, getAllFolders} from "../API/apiGetAll"
import {extractFolderName} from "../helper/formatDate"

const DocumentPage = () => {
  const {name} = useParams()
  const [loaded, setLoaded] = useState(false)
  const [helderSerchFullItem, setHelderSerchFullItem] = useState<IYandexDiskFile[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([getAllFolders(), getAllFiles()])
        const fullItem = appStore.arrayItems.filter((item) => item.name === name)
        setHelderSerchFullItem(fullItem)
        setLoaded(true)
      } catch (error) {
        console.error("Error loading data: ", error)
      }
    }

    fetchData()
  }, [name])

  useEffect(() => {
    if (name && helderSerchFullItem.length > 0) {
      handleChangeCategoryFile(name, helderSerchFullItem[0].path)
    }
  }, [name, helderSerchFullItem])

  if (!loaded) {
    return (
      <div style={{display: "flex", justifyContent: "center"}}>
        <span className="loader"></span>
      </div>
    )
  }

  const handleChangeCategoryFile = (name: string, path: string) => {
    if (name && !appStore.categoryFilter) {
      appStore.setCategoryTemp(appStore.categoryFilter)
      appStore.setCategoryFilter(`${extractFolderName(path)}/${name}`)
    }
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
      <DocumentViewer/>
    </div>
  )
}

export default DocumentPage
