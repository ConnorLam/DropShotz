import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'

import { getVidThunk } from "../../../store/video";
import VideoCard from "./VideoCard";
import './index.css'



const AllVids = () => {

    const dispatch = useDispatch()
    const [isLoaded, setIsLoaded] = useState(false)
    const videos = useSelector(state => state.videos)
    const videosArr = Object.values(videos)
    // console.log(videosArr)
    
    useEffect(() => {
        dispatch(getVidThunk())
        .then(() => setIsLoaded(true))
    }, [dispatch])

    return isLoaded && (
        <div className="video-list-page">
            {/* <div>Videos</div> */}
            {/* <div> */}
            {/* <div className="video-list"> */}
                {videosArr.map(video => (
                    <VideoCard key={video.id} video={video} />
                ))}
            {/* </div> */}
            {/* </div> */}
        </div>
    )
    
}

export default AllVids