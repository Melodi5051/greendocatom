import { observer } from "mobx-react-lite"
import { appStore } from "../store/store"
import { useEffect } from "react"
import TableTrash from "../components/TableTrash/TableTrash"
import { filterItems } from "../helper/filterItems"
import { getAllTrash } from "../API/apiGetAll"

const BasketPage = () => {
  useEffect(() => {
    getAllTrash()
    appStore.setCategoryFilter("")
  }, [])
  const totalPages = Math.ceil(appStore.arrayTrashItems.length / appStore.limitItems)
  const handlePageChange = (page: number) => {
    appStore.setCurrentPage(page)
  }

  return (
    <div className="content-wrapper rosatom-fontFamily-regular">
      <TableTrash arrayItems={filterItems(appStore.arrayTrashItems, appStore.categoryFilter)} />
      <div className="pagination">
        <button
          onClick={() => handlePageChange(appStore.currentPage - 1)}
          disabled={appStore.currentPage === 1}
          className="pagination-button back"
        >
          Назад
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`pagination-button ${appStore.currentPage === index + 1 ? "active" : ""}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(appStore.currentPage + 1)}
          disabled={appStore.currentPage === totalPages}
          className="pagination-button forward"
        >
          Вперед
        </button>
      </div>
    </div>
  )
}

export default observer(BasketPage)
