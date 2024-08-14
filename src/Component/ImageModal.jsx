import { useState } from "react";

import Modal from "react-modal";
Modal.setAppElement("#root");

const ImageModal = ({ openModal, modalIsOpen, closeModal }) => {
  return (
    <div>
      <div>
        <Modal
        className={'bg-red-300 min-h-[500px] my-auto'}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            },
            content: {
              color: "black",
              padding: "20px",
              borderRadius: "5px",
              maxWidth: "70%",
              margin: "auto",
            },
          }}
        >
          <h2>Hello, I am a Modal</h2>
          <button className="btn btn-warning" onClick={closeModal}>Close Modal</button>
        </Modal>
      </div>
    </div>
  );
};

export default ImageModal;
