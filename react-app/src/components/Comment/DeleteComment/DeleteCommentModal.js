import DeleteComment from "./DeleteComment";
import { useState } from "react";
import { Modal } from "../../../context/Modal";

const DeleteCommentModal = ({ video, comment }) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Delete Comment</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <DeleteComment video={video} comment={comment} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
};

export default DeleteCommentModal;