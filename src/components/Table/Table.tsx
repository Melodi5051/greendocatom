import "./Table.css"
import TableItem from "../TableItem/TableItem"
import { IYandexDiskFile } from "../../types/Files"
import { paginate } from "../../helper/filterItems"
import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import { appStore } from "../../store/store"
const Table = ({ arrayItems }: any) => {
  useEffect(() => {
    const handleResize = () => {
      appStore.setLimitItems(
        Math.floor((window.innerHeight - 320) / (window.innerWidth < 620 ? 70 : 65)),
      )
    }
    window.addEventListener("resize", handleResize)
  }, [])
  return (
    <section className="table-wrapper">
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
          {paginate(arrayItems, 1, appStore.limitItems).map(
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
    </section>
  )
}

export default observer(Table)
