import { observer } from "mobx-react-lite"
import Table from "../components/Table/Table"
import { filterItems } from "../helper/filterItems"
import { appStore } from "../store/store"
import "./MainPage.css"
const MainPage = () => {
  const totalPages = Math.ceil(
    filterItems(appStore.arrayItems, appStore.categoryFilter).length / appStore.limitItems,
  )

  const handlePageChange = (page: number) => {
    appStore.setCurrentPage(page)
  }

  return (
    <div className="content-wrapper rosatom-fontFamily-regular">
      <Table arrayItems={filterItems(appStore.arrayItems, appStore.categoryFilter)} />
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

export default observer(MainPage)
