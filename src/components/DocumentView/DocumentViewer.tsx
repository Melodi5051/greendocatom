import { useParams } from "react-router-dom"
import React from "react";
import "./DocumentViewer.css";
import { observer } from "mobx-react-lite";
import { appStore } from "../../store/store";

const DocumentViewer = () => {
    const { name } = useParams()
    const helderSerchFullItem = appStore.arrayItems.filter((item) => item.name === name)
    return (
        <div className="document-view">
            <img src={helderSerchFullItem[0].preview} alt="Document preview" />
        </div>
    );
};

export default observer(DocumentViewer);
