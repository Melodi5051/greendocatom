import '../../index.css'
import './Footer.css'
import Modal from 'react-modal';
import Team from '../Team/Team';
import React, { useState } from 'react';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="footer">
      {/* <p className="footer-copyright rosatom-fontFamily-regular">&#169; команда 1. 2023 год</p> */}
      <button onClick={openModal} className="footer-copyright rosatom-fontFamily-regular open-team">&#169; команда 1. 2023 год</button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Модальное окно команды"
      >
        <Team />
      </Modal>
    </div>
  )
}

export default Footer;
