import { render, screen } from "@testing-library/react"
import TableItem from "./TableItem"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

const mockFile = {
  name: "example.txt",
  path: "/disk/ExampleFolder/example.txt",
  modified: "2023-11-20T12:01:00Z",
  created: "2023-11-20T12:00:00Z",
}

test("отображение компонента TableItem с элементами", () => {
  render(
    <BrowserRouter>
      <table>
        <tbody>
          <TableItem {...mockFile} />
        </tbody>
      </table>
    </BrowserRouter>,
  )

  expect(screen.getByText("СКАЧАТЬ")).toBeInTheDocument()
  expect(screen.getByText("УДАЛИТЬ")).toBeInTheDocument()
  expect(screen.getByText("example")).toBeInTheDocument()
  expect(screen.getByRole("combobox")).toBeInTheDocument()
})

test("клики по кнопкам загрузки и удаления", () => {
  render(
    <BrowserRouter>
      <table>
        <tbody>
          <TableItem {...mockFile} />
        </tbody>
      </table>
    </BrowserRouter>,
  )

  const downloadButton = screen.getByText("СКАЧАТЬ")
  const deleteButton = screen.getByText("УДАЛИТЬ")

  userEvent.click(downloadButton)
  userEvent.click(deleteButton)
})
