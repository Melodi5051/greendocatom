import { render, screen } from "@testing-library/react"
import Aside from "./Aside"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

test("Aside рендерит компонент корректно", () => {
  render(
    <BrowserRouter>
      <Aside data-testid="aside-component" />
    </BrowserRouter>,
  )
  const asideComponent = screen.getByTestId("aside-component")
  expect(asideComponent).toBeInTheDocument()
})
