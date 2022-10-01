import EditComment from "./EditCommentForm";
import { useState } from "react";
import { Modal } from "../../../context/Modal";
import './EditComment.css'

const EditCommentModal = ({ video, comment }) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit Comment</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} className='pls-work'>
            <EditComment video={video} oldComment={comment} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
};

export default EditCommentModal;
