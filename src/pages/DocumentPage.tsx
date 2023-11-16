import { useEffect } from "react"
import DocumentDetails from "../components/DocumentDetails/DocumentDetails"
import DocumentViewer from "../components/DocumentView/DocumentViewer"
import { getAllFiles, getAllFolders } from "../API/axios.api"
import "./DocumentPage.css"

const DocumentPage = () => {
    useEffect(() => {
        getAllFiles()
        getAllFolders()
    }, [])
    return (
        <div className="document-page">
            <DocumentDetails />
            <DocumentViewer />
        </div>
    )
}

export default DocumentPage
