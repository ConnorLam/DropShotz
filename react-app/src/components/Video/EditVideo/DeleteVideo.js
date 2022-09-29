import React from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { deleteVidThunk } from "../../../store/video"


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
        <div>
            <h3>Are you sure you want to delete {video.title}?</h3>
            <div>
                <button onClick={handleClick}>Cancel</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )

}

export default DeleteVideo