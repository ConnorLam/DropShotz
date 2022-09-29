import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateVidThunk } from "../../../store/video";


const EditVideo = ({video, setShowModal}) => {
    const history = useHistory();
    const dispatch = useDispatch() // so that we can redirect after the image upload is successful
    const [title, setTitle] = useState(video?.title || '')
    const [description, setDescription] = useState(video?.description || '')
    // console.log(video)
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();

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
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">
                Title
            </label>
            <input
              type='text'
              name='title'
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <label htmlFor="description">Description</label>
            <textarea 
              type="text"
              name="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default EditVideo;