import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateVidThunk } from "../../../store/video";
import './EditVideo.css'


const EditVideo = ({video, setShowModal}) => {
    const history = useHistory();
    const dispatch = useDispatch() // so that we can redirect after the image upload is successful
    const [title, setTitle] = useState(video?.title || '')
    const [description, setDescription] = useState(video?.description || '')
    const [validationErrors, setValidationErrors] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    // console.log(video)
    
    useEffect(() => {
      const errors = [];

      if (!video) errors.push("Please provide a video");
      if (!title) errors.push("Please provide a title");
      if (!description) errors.push("Please provide a description");
      if (description.length < 5 || description.length > 200)
        errors.push("Description must be between 5 and 200 characters");

      setValidationErrors(errors);
    }, [video, title, description]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitted(true)

        if (validationErrors.length > 0) return

        const formData = new FormData();

        formData.append('title', title)
        formData.append('description', description)
        
        const newVidInfo = {
            title,
            description
        }
        const payload = {
            videoId: video.id,
            video: newVidInfo
        }

        const data = await dispatch(updateVidThunk(payload))

        setShowModal(false)

    }

    const handleClick = (e) => {
      e.preventDefault();
      setShowModal(false);
    };
    
    return (
    <div className="whole-edit-form">
      <h3>Want to change video details?</h3>
      {isSubmitted &&
          validationErrors.map((error, i) => <div className='errors' key={i}><li>{error}</li></div>)}
      <form className='actual-edit-form' onSubmit={handleSubmit}>
            <div className="edit-title">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <textarea
                    className="description-edit"
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
          <div className="cancel-submit-button">
            <button onClick={handleClick}>Cancel</button>
            <button type="submit">Submit</button>
          </div>
      </form>
    </div>
    );
}

export default EditVideo;