import DeleteVideo from "./DeleteVideo";
import { useState } from "react";
import { Modal } from "../../../context/Modal";

const DeleteVideoModal = ({ video, setIsLoaded }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Delete Video</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteVideo video={video} setShowModal={setShowModal} setIsLoaded={setIsLoaded}/>
        </Modal>
      )}
    </div>
  );
};

export default DeleteVideoModal;
