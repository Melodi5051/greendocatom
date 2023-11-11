import "./Table.css"
import TableItem from "../TableItem/TableItem"
import { IYandexDiskFile } from "../../types/Files"
import { paginate } from "../../helper/filterItems"

const Table = ({ arrayItems }: any) => {
  return (
    <section className="table-wrapper">
      <table className="documents-list-wrapper rosatom-fontFamily-regular">
        <thead>
          <tr>
            <th></th>
            <th>Название</th>
            <th>Категория</th>
            <th>Дата обновления</th>
            <th>Дата добавления</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {paginate(arrayItems, 1, 6).map((file: IYandexDiskFile, index: number) => (
            <TableItem
              key={index}
              name={file.name}
              path={file.path}
              modified={file.modified}
              created={file.created}
            />
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Table
