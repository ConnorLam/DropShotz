import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Switch, Route, useParams, useRouteMatch, Redirect } from "react-router-dom";

import { getVidIdThunk } from "../../../store/video";
import { getVidCommentThunk } from "../../../store/comments";
import NotFound from "../../NotFound/NotFound";

import Video from "./Video";

const VideoPage = () => {
    const { videoId } = useParams()

    const dispatch = useDispatch()
    const videos = useSelector(state => state.videos)
    // console.log(videos)
    const video = videos[Number(videoId)]
    // console.log(video)

    const comments = useSelector(state => state.comments)
    // console.log(comments)
    const commentsList = Object.values(comments).reverse()
    // console.log(commentsList)
    // console.log(video.comments)

    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        dispatch(getVidIdThunk(videoId))
        .then(() => dispatch(getVidCommentThunk(videoId)))
        .then(() => setIsLoaded(true))
    }, [dispatch, videoId])

    if(!video){
        return <NotFound />
    }

    return isLoaded && (
        <div className="video-page">
            <div>
                <Video video={video} commentsList={commentsList} isLoaded={isLoaded} setIsLoaded={setIsLoaded}/>
            </div>
            {/* <div>
                <CommentInfo video={video} commentsList={commentsList}/>
            </div> */}
        </div>
    )

}

export default VideoPage