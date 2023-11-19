import { useEffect } from "react"
import { IYandexDiskFile, IYandexTrashItems } from "../../types/Files"
import { paginate } from "../../helper/filterItems"
import { observer } from "mobx-react-lite"
import { appStore } from "../../store/store"
import TableItemTrash from "../TableItemTrash/TableItemTrash"

interface TableProps {
  arrayItems: IYandexTrashItems[]
}

const TableTrash: React.FC<TableProps> = ({ arrayItems }) => {
  useEffect(() => {
    const handleResize = () => {
      appStore.setLimitItems(
        Math.floor((window.innerHeight - 320) / (window.innerWidth < 620 ? 70 : 65)),
      )
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <>
      <section className="table-wrapper">
        {appStore.arrayItems.length === 0 ? (
          <div>
            <h1 className="table-no-items">В корзине нету файлов</h1>
          </div>
        ) : (
          <table className="documents-list-wrapper rosatom-fontFamily-regular">
            <thead>
              <tr>
                <th className="ht-2">Название</th>
                <th className="th-6"></th>
                <th className="th-7"></th>
              </tr>
            </thead>
            <tbody>
              {paginate(arrayItems, appStore.currentPage, appStore.limitItems).map(
                (file: IYandexDiskFile, index: number) => (
                  <TableItemTrash key={index} name={file.name} path={file.path} />
                ),
              )}
            </tbody>
          </table>
        )}
      </section>
    </>
  )
}

export default observer(TableTrash)
