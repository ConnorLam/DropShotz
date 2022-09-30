import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getVidCommentThunk } from "../../../store/comments";

const CommentInfo = ({video, commentsList}) => {
    const user = useSelector(state => state.session.user)
    console.log(commentsList)

    return (
        <div>
            <div>
                <h4>{commentsList.length === 1 ? `${commentsList.length} Comment` : `${commentsList.length} Comments`} </h4>
            </div>
            {commentsList.length ? <div>No Reviews Yet</div> : commentsList.map(comment => (
                <div key={comment.id}>{comment.user.username},{' '}{comment.comment}</div>
            ))}
        </div> 
    );

}

export default CommentInfo