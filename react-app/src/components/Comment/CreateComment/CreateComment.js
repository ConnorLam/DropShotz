import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createCommentThunk } from "../../../store/comments";
import EditCommentModal from "../UpdateComment/EditCommentModal";

import './CreateComment.css'

const CommentForm = ({video}) => {
    const dispatch = useDispatch()
    // console.log(video)
    const [comment, setComment] = useState('')
    const sessionUser = useSelector((state) => state.session.user);
    const [validationErrors, setValidationErrors] = useState([])
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const history = useHistory()

    useEffect(() => {
        const errors = []
        if(comment.length > 500 || comment.length < 5) errors.push('Comment must be between 5 and 500 characters')

        setValidationErrors(errors)
    }, [comment])

    const handleSubmit = async e => {
        e.preventDefault()

        setHasSubmitted(true)

        if(validationErrors.length > 0) return

        const newComment = {
            comment
        }

        
        const payload = {videoId: video.id, comment: newComment}
        
        const data = await dispatch(createCommentThunk(payload))
        setComment('')
        
        setHasSubmitted(false)
        
        return
        
        
    }

    // const handleClick = () => {
    //     if (!sessionUser) {
    //       return alert("Must be signed up to write a comment");
    //     }

    // }

    return (
        <div className="comment-form-page">
            {hasSubmitted && validationErrors.map((error, i) => (
                <div className="errors" key={i}><li>{error}</li></div>
            ))}
            <form onSubmit={handleSubmit}>
                <div>
                    <textarea
                        className="create-comm-textarea"
                        type="text"
                        name="comment"
                        value={comment}
                        placeholder='Write your comment here'
                        onChange={e => setComment(e.target.value)}
                    />
                </div>
                <div className="submit-button-div">
                    <button className="submit-button" id={comment.length > 0 ? 'yes-comm' : 'no-comm'} disabled={comment.length > 0 ? false : true} type="submit">
                        COMMENT
                    </button>
                    {/* <EditCommentModal video={video}/> */}
                </div>
            </form>
        </div>
    )

}

export default CommentForm