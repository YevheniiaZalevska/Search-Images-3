import Modal from "react-modal";
import s from "./ImageModal.module.css";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(1, 1, 1, 0.9)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    border: "none",
    overflow: "hidden",
    background: "transparent",
  },
};

const ImageModal = ({ modalIsOpen, closeModal, imageUrl, imageAlt }) => {
  console.log(modalIsOpen);

  Modal.setAppElement("#root");

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      imageUrl={imageUrl}
      imageAlt={imageAlt}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className={s.wrapperModalImg}>
        <img className={s.modalImg} src={imageUrl} alt={imageAlt} />
      </div>
    </Modal>
  );
};

export default ImageModal;