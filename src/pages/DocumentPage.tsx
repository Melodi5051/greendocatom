import { useEffect } from "react"
import DocumentDetails from "../components/DocumentDetails/DocumentDetails"
import DocumentViewer from "../components/DocumentView/DocumentViewer"
import { getAllFiles, getAllFolders } from "../API/axios.api"
import "./DocumentPage.css"

const DocumentPage = () => {
    useEffect(() => {
        getAllFolders()
        getAllFiles()
    }, [])
    return (
        <div className="document-page">
            <DocumentDetails />
            <DocumentViewer />
        </div>
    )
}

export default DocumentPage
