import React, { useState } from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <aside className="sidebar">
        <h1 className="logo">
          <a href="#!">
            Brand<strong>Colors</strong>
          </a>
        </h1>
        <div className="description">
          The biggest collection of official brand color codes around. Curated
          by{" "}
          <a className="brand-link" href="https://twitter.com/brandcolors">
            @brandcolors
          </a>{" "}
          and friends.
        </div>
        <nav className="menu">
          <ul>
            <li>
              <a onClick={toggleModal} href="#!">
                About BrandColors
              </a>
            </li>
            <li>
              <Link to="/generator">Color Generator</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        className="about-modal"
        overlayClassName="about-modal__overlay"
      >
        <h3 className="about-modal__title">About BrandColors</h3>
        <button className="about-modal__close" onClick={toggleModal}>
          <AiOutlineClose />
        </button>
        <p className="about-modal__text">
          BrandColors was created by <strong>DesignBombs</strong>. The goal was
          to create a helpful reference for the brand color codes that are
          needed most often.
        </p>
        <p className="about-modal__text">
          It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot,
          Tuts+, and over <strong>2 million pageviews</strong>. There are now
          over <strong>600 brands</strong> with <strong>1600 colors</strong> and
          the collection is always growing.
        </p>
      </Modal>
    </>
  );
};

export default Sidebar;
