import { useParams } from "react-router-dom"
import React, {useEffect, useState} from "react";
import "./DocumentViewer.css";
import { observer } from "mobx-react-lite";
import { appStore } from "../../store/store";
import {IYandexDiskFile} from "../../types/Files";
import { getAllFiles, getAllFolders } from "../../API/apiGetAll"

const DocumentViewer = () => {
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
        <div className="document-view">
            <img src={helderSerchFullItem[0].preview} alt="Document preview" />
        </div>
    );
};

export default observer(DocumentViewer);
