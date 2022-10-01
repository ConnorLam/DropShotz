import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

    useEffect(() => {
        const errors = []
        if(comment.length > 1000) errors.push('Comment must be 1000 characters or less')

        setValidationErrors(errors)
    }, [comment])

    const handleSubmit = async e => {
        e.preventDefault()

        setHasSubmitted(true)

        if(validationErrors.length > 0) return

        const newComment = {
            comment
        }

        setComment('')

        const payload = {videoId: video.id, comment: newComment}

        const data = await dispatch(createCommentThunk(payload))

        setHasSubmitted(false)

        return


    }

    return (
        <div>
            {hasSubmitted && validationErrors.map((error, i) => (
                <div className="errors" key={i}><li>{error}</li></div>
            ))}
            <form onSubmit={handleSubmit}>
                <div>
                    <textarea 
                        type="text"
                        name="comment"
                        value={comment}
                        placeholder='Write your comment here'
                        onChange={e => setComment(e.target.value)}
                    />
                </div>
                <div>
                    <button disabled={comment.length > 0 ? false : true} type="submit">
                        Submit
                    </button>
                    {/* <EditCommentModal video={video}/> */}
                </div>
            </form>
        </div>
    )

}

export default CommentForm