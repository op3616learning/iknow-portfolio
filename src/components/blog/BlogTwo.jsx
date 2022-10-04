import React, { useState } from "react";
import Modal from "react-modal";
import ModalOne from "./Modal/ModalOne";
import ModalTwo from "./Modal/ModalTwo";
import ModalThree from "./Modal/ModalThree";

Modal.setAppElement("#root");

const BlogTwo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }

  return (
    <>
      <div className="news_list">
        <ul>
          <li>
            <div className="list_inner">
              <div className="image" onClick={toggleModalOne}>
                <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "img/news/1.jpg"
                    })`,
                  }}
                ></div>
              </div>
              {/* End image */}

              <div className="details">
                <span className="category">
                  <a href="#">Web Design</a>
                </span>
                <h3 className="title" onClick={toggleModalOne}>
                  How to create a website using WordPress
                </h3>
              </div>
              {/* End details */}
            </div>
          </li>
          {/* End single blog One */}

          <li>
            <div className="list_inner">
              <div className="image" onClick={toggleModalTwo}>
                <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "img/news/2.jpg"
                    })`,
                  }}
                ></div>
              </div>
              {/* End image */}
              <div className="details">
                <span className="category">
                  <a href="#">Branding</a>
                </span>
                <h3 className="title" onClick={toggleModalTwo}>
                  Angular team streamlines requests
                </h3>
              </div>
              {/* End details */}
            </div>
            {/* End list inner */}
          </li>
          {/* End single blog Two */}

          <li>
            <div className="list_inner">
              <div className="image" onClick={toggleModalThree}>
                <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "img/news/3.jpg"
                    })`,
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="details">
                <span className="category">
                  <a href="#">UI Design</a>
                </span>
                <h3 className="title" onClick={toggleModalThree}>
                  How to handle errors in React Javascript
                </h3>
              </div>
              {/* End details */}
            </div>
            {/* END LIST INNER */}
          </li>
          {/* End single blog Three */}
        </ul>

        {/* Start Modal One */}
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModalOne}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="know_tm_modalbox">
            <button className="close-modal" onClick={toggleModalOne}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner">
              <ModalOne />
            </div>
            {/* End box inner */}
          </div>
          {/* End modal box news */}
        </Modal>
        {/* End modal One */}

        {/* Start Modal Two */}
        <Modal
          isOpen={isOpen2}
          onRequestClose={toggleModalTwo}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="know_tm_modalbox">
            <button className="close-modal" onClick={toggleModalTwo}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* End close modal */}
            <div className="box_inner">
              <ModalTwo />
            </div>
          </div>
        </Modal>
        {/* End modal Two */}

        {/* Start Modal Three */}
        <Modal
          isOpen={isOpen3}
          onRequestClose={toggleModalThree}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="know_tm_modalbox">
            <button className="close-modal" onClick={toggleModalThree}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE MODAL */}
            <div className="box_inner">
              <ModalThree />
            </div>
          </div>
        </Modal>
        {/* End Modal Three */}
      </div>
    </>
  );
};

export default BlogTwo;
