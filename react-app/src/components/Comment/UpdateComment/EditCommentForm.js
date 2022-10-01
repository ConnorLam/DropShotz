import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateCommentThunk } from "../../../store/comments";
import './EditComment.css'

const EditComment = ({video, oldComment, setShowModal}) => {
    // console.log('asdhjfjklashfjklahlfjkajklfa', comment)
    const dispatch = useDispatch()
    // const history = useHistory()
    const [comment, setComment] = useState(oldComment?.comment || '')
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
      const errors = [];
      if (comment.length > 1000) errors.push("Comment must be 1000 characters or less");
      if (!comment) errors.push("Please provide a comment");

      setValidationErrors(errors);
    }, [comment]);

    const handleSubmit = async e => {
        e.preventDefault()

        setHasSubmitted(true)

        if (validationErrors.length > 0) return

        const updatedComment = {
            comment
        }

        const payload = {commentId: oldComment.id, comment: updatedComment}

        const data = await dispatch(updateCommentThunk(payload))

        // if (data.statusCode > 200){
        //     setValidationErrors([data.message])
        //     return
        // }

        setShowModal(false)
    }

    const handleClick = (e) => {
      e.preventDefault();
      setShowModal(false);
    };
    // console.log(newComment)


    return (
      <div className="edit-comment-modal">
        <h3>Edit your comment</h3>
        {hasSubmitted &&
          validationErrors.map((error, i) => (
            <div className="errors" key={i}>
              <li>{error}</li>
            </div>
          ))}
        <form className="whole-edit-comment-form" onSubmit={handleSubmit}>
          <div>
            <textarea
              className="edit-comm-text-area"
              type="text"
              name="comment"
              value={comment}
              placeholder="Write your comment here"
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <div className="cancel-submit-button">
            <button onClick={handleClick}>Cancel</button>
            <button type="submit">Submit</button>
            {/* <EditCommentModal video={video}/> */}
          </div>
        </form>
      </div>
    );
}

export default EditComment