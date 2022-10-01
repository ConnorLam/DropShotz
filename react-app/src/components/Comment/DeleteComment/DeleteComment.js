import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { deleteCommentThunk } from "../../../store/comments";

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
        <div>
            <h3>Are you sure you want to delete your comment?</h3>
            <div>
                <button onClick={handleClick}>Cancel</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default DeleteComment