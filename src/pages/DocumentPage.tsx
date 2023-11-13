import { useParams } from "react-router-dom"
import { appStore } from "../store/store"
const DocumentPage = () => {
  const { name } = useParams()
  const helderSerchFullItem = appStore.arrayItems.filter((item) => item.name === name)
  return (
    <div>
      <h2>Страница документа</h2>
      <p>Имя документа {helderSerchFullItem[0].name}</p>
      <p>Каталог документа {helderSerchFullItem[0].path}</p>
      <p>Дата создания документа {helderSerchFullItem[0].created}</p>
      <p>Дата обновлениея документа {helderSerchFullItem[0].modified}</p>
    </div>
  )
}

export default DocumentPage
