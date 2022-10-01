import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { deleteCommentThunk } from "../../../store/comments";
import './DeleteComment.css'

const DeleteComment = ({comment, setShowModal}) => {
    const dispatch = useDispatch()

    const handleDelete = async e => {
        e.preventDefault()

        const data = await dispatch(deleteCommentThunk(comment.id))

        setShowModal(false)
    }

    const handleClick = (e) => {
      e.preventDefault();
      setShowModal(false);
    };

    return(
        <div className="delete-comment-form">
            <h3>Are you sure you want to delete your comment?</h3>
            <div className="cancel-submit-button delete-comm-buttons">
                <button onClick={handleClick}>Cancel</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default DeleteComment