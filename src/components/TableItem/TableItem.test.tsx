import { render, screen } from "@testing-library/react"
import TableItem from "./TableItem"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

const mockFile = {
  name: "example.txt",
  path: "/disk/ExampleFolder/example.txt",
  modified: "2023-11-20T12:00:00Z",
  created: "2023-11-20T12:00:00Z",
}

test("renders TableItem component", () => {
  window.innerWidth = 1920
  window.innerHeight = 1080
  window.dispatchEvent(new Event("resize"))
  render(
    <BrowserRouter>
      <table>
        <tbody>
          <TableItem {...mockFile} />
        </tbody>
      </table>
    </BrowserRouter>,
  )

  expect(screen.getByText("example")).toBeInTheDocument() //Проверка присутствия названия файла на странице

  expect(screen.getByRole("combobox")).toBeInTheDocument()

  expect(screen.getByText("СКАЧАТЬ")).toBeInTheDocument()
  expect(screen.getByText("УДАЛИТЬ")).toBeInTheDocument()
})
