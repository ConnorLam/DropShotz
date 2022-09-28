import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Switch, Route, useParams, useRouteMatch, Redirect } from "react-router-dom";

import { getVidIdThunk } from "../../../store/video";

import Video from "./Video";

const VideoPage = () => {
    const { videoId } = useParams()
    console.log(videoId)

    const dispatch = useDispatch()
    const videos = useSelector(state => state.videos)
    // console.log(videos)
    const video = videos[Number(videoId)]
    console.log(video)

    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        dispatch(getVidIdThunk(videoId))
        .then(() => setIsLoaded(true))
    }, [dispatch, videoId])

    return isLoaded && (
        <div>
            <div>
                <Video video={video}/>
            </div>
        </div>
    )

}

export default VideoPage