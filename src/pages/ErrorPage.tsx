import React from "react"
import { Link } from "react-router-dom"
import "./ErrorPage.css"
const ErrorPage = () => {
  return (
    <div className="errorpage rosatom-fontFamily-bold">
      <h1 className="errorpage-title">404 :(</h1>
      <h2 className="errorpage-descript">Страница не найдена</h2>
      <Link to={"/"}>
        <button className="errorpage-button">Вернуться на главную</button>
      </Link>
    </div>
  )
}

export default ErrorPage
