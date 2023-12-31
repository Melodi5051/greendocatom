import "./Table.css"
import TableItem from "../TableItem/TableItem"
import { IYandexDiskFile } from "../../types/Files"
import { paginate } from "../../helper/filterItems"
import { observer } from "mobx-react-lite"
import { appStore } from "../../store/store"
import { useEffect } from "react"
import { getAllFiles } from "../../API/apiGetAll"

interface TableProps {
  arrayItems: IYandexDiskFile[]
}

const Table: React.FC<TableProps> = ({ arrayItems }) => {
  useEffect(() => {
    getAllFiles()
    appStore.setCurrentPage(1)
  }, [appStore.categoryFilter])
  return (
    <>
      <section className="table-wrapper">
        {appStore.arrayItems.length === 0 ? (
          <div>
            <h1 className="table-no-items">У вас нет файлов, добавьте их.</h1>
          </div>
        ) : (
          <table className="documents-list-wrapper rosatom-fontFamily-regular">
            <thead>
              <tr>
                <th className="ht-2">Название</th>
                <th className="th-3">Категория</th>
                <th className="th-4">Дата обновления</th>
                <th className="th-5">Дата добавления</th>
                <th className="th-6"></th>
                <th className="th-7"></th>
              </tr>
            </thead>
            <tbody>
              {paginate(arrayItems, appStore.currentPage, appStore.limitItems).map(
                (file: IYandexDiskFile, index: number) => (
                  <TableItem
                    key={index}
                    name={file.name}
                    path={file.path}
                    modified={file.modified}
                    created={file.created}
                  />
                ),
              )}
            </tbody>
          </table>
        )}
      </section>
    </>
  )
}

export default observer(Table)
