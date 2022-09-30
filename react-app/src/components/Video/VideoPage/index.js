import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Switch, Route, useParams, useRouteMatch, Redirect } from "react-router-dom";

import { getVidIdThunk } from "../../../store/video";
import { getVidCommentThunk } from "../../../store/comments";

import Video from "./Video";
import CommentInfo from "./Comments";

const VideoPage = () => {
    const { videoId } = useParams()

    const dispatch = useDispatch()
    const videos = useSelector(state => state.videos)
    // console.log(videos)
    const video = videos[Number(videoId)]

    const comments = useSelector(state => state.comments)
    const commentsList = Object.values(comments)
    // console.log(commentsList)
    // console.log(video.comments)

    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        dispatch(getVidIdThunk(videoId))
        .then(() => dispatch(getVidCommentThunk(videoId)))
        .then(() => setIsLoaded(true))
    }, [dispatch, videoId])

    return isLoaded && (
        <div className="video-page">
            <div>
                <Video video={video} commentsList={commentsList}/>
            </div>
            {/* <div>
                <CommentInfo video={video} commentsList={commentsList}/>
            </div> */}
        </div>
    )

}

export default VideoPage