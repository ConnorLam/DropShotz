import React, {useState} from "react";
import { useHistory } from "react-router-dom";


const UploadVideo = () => {
    const history = useHistory(); // so that we can redirect after the image upload is successful
    const [video, setVideo] = useState(null);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [videoLoading, setVideoLoading] = useState(false);
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("video", video);
        formData.append('title', title)
        formData.append('description', description)
        
        // aws uploads can be a bit slow—displaying
        // some sort of loading message is a good idea
        setVideoLoading(true);

        const res = await fetch('/api/upload', {
            method: "POST",
            body: formData,
        });
        if (res.ok) {
            await res.json();
            setVideoLoading(false);
            return
            // history.push("/");
        }
        else {
            setVideoLoading(false);
            // a real app would probably use more advanced
            // error handling
            console.log("error");
        }
    }
    
    const updateVideo = (e) => {
        const file = e.target.files[0];
        setVideo(file);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input
              type="file"
              accept="mp4"
              onChange={updateVideo}
            />
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
            {(videoLoading)&& <p>Loading...</p>}
        </form>
    )
}

export default UploadVideo;