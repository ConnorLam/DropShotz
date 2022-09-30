import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";


const UploadVideo = () => {
    const history = useHistory(); // so that we can redirect after the image upload is successful
    const [video, setVideo] = useState(null);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [videoLoading, setVideoLoading] = useState(false);

    const [validationErrors, setValidationErrors] = useState([])
    const [submitted, setIsSubmitted] = useState(false)

    useEffect(() => {
        const errors = []

        if(!video) errors.push('Please provide a video')
        if(!title) errors.push('Please provide a title')
        if(!description) errors.push('Please provide a description')
        if(description.length < 5 || description.length > 200) errors.push('Description must be between 5 and 200 characters')

        setValidationErrors(errors)
    }, [video, title, description])
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitted(true)

        const formData = new FormData();

        formData.append("video", video);
        formData.append('title', title)
        formData.append('description', description)
        
        // aws uploads can be a bit slow—displaying
        if(validationErrors.length > 0) return
        // some sort of loading message is a good idea
        setVideoLoading(true);


        const res = await fetch('/api/upload', {
            method: "POST",
            body: formData,
        });
        if (res.ok) {
            await res.json();
            setVideoLoading(false);
            // return
            history.push("/");
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
        <div>
            <div>
                <h3>Post your best badminton clips here!</h3>
            </div>
            {submitted && validationErrors.map(((error, i) => <div key={i}>{error}</div>))}
            <form onSubmit={handleSubmit}>
                <input
                type="file"
                accept="video/mp4"
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
        </div>
    )
}

export default UploadVideo;