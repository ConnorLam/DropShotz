import React from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { deleteVidThunk } from "../../../store/video"
import './DeleteVideo.css'


const DeleteVideo = ({video, setShowModal, setIsLoaded}) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const handleDelete = async e => {
        e.preventDefault()
        setIsLoaded(false)

        const data = await dispatch(deleteVidThunk(video.id))
        history.push('/')

    }

    const handleClick = (e) => {
      e.preventDefault();
      setShowModal(false);
    };

    return (
        <div className="delete-modal">
            <h3>Are you sure you want to delete <span className="video-title">{video.title}</span>?</h3>
            <div className="cancel-submit-button">
                <button onClick={handleClick}>Cancel</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
            <div className="nice-words">
                <div>
                    This was a really cool video :(
                </div>
            </div>
        </div>
    )

}

export default DeleteVideo