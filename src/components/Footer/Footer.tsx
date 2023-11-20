import '../../index.css'
import "./Footer.css"
import Team from "../Team/Team"
import React, { useState } from "react"

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="footer">
      <p className="footer-copyright rosatom-fontFamily-regular">&#169; команда 1. 2023 год</p>
    </div>
  )
}

export default Footer;
