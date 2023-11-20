import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect" // Для использования расширенных матчеров Jest
import Aside from "./Aside"
import { storeAside } from "../../store/storeAside"

test("Aside рендерит компонент корректно", () => {
  render(<Aside />)
  expect(screen.getByText("fd")).toBeInTheDocument()
})
