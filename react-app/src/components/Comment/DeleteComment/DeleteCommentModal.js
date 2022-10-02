import DeleteComment from "./DeleteComment";
import { useState } from "react";
import { Modal } from "../../../context/Modal";

const DeleteCommentModal = ({ video, comment }) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div>
        <i onClick={() => setShowModal(true)} className="fa-solid fa-trash edit-comm-button"></i>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteComment
            video={video}
            comment={comment}
            setShowModal={setShowModal}
          />
        </Modal>
      )}
    </>
  );
};

export default DeleteCommentModal;