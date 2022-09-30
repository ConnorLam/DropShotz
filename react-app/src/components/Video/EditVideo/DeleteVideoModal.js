import DeleteVideo from "./DeleteVideo";
import { useState } from "react";
import { Modal } from "../../../context/Modal";

const DeleteVideoModal = ({ video, setIsLoaded }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Delete Video</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteVideo video={video} setShowModal={setShowModal} setIsLoaded={setIsLoaded}/>
        </Modal>
      )}
    </>
  );
};

export default DeleteVideoModal;
