import "./Table.css"
import TableItem from "../TableItem/TableItem"
import { IYandexDiskFile } from "../../types/Files"

const Table = ({ arrayItems }: any) => {
  return (
    <section className="table-wrapper">
      <select name="" id="" />
      <table className="documents-list-wrapper">
        <thead>
          <tr>
            <th>Название</th>
            <th>Категория</th>
            <th>Дата обновления</th>
            <th>Дата добавления</th>
          </tr>
        </thead>
        <tbody>
          {arrayItems.map((file: IYandexDiskFile, index: number) => (
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
