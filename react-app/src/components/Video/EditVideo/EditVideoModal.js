import EditVideo from './EditVideo'
import { useState } from "react";
import { Modal } from "../../../context/Modal";

const EditVideoModal = ({video}) => {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button onClick={() => setShowModal(true)}>Edit Video</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditVideo video={video} setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
    )
}

export default EditVideoModal