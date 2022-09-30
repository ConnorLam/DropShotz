import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import EditVideoModal from "../EditVideo/EditVideoModal";
import DeleteVideoModal from "../EditVideo/DeleteVideoModal";
import './index.css'


const Video = ({video}) => {
    // console.log(video.comments)
    // const [users, setUsers] = useState([]);
    // console.log(users)
    const sessionUser = useSelector(state => state.session.user)
    const [isLoaded, setIsLoaded] = useState(true)

    // useEffect(() => {
    // async function fetchData() {
    //     const response = await fetch("/api/users/");
    //     const responseData = await response.json();
    //     setUsers(responseData.users);
    // }
    // fetchData();
    // }, []);
    // console.log(video.timeCreated.split(' ').slice(1, 4).join(' '))
    const datePosted = new Date(video.timeCreated);
    console.log(typeof(datePosted));
    const now = Date.now();
    const milliseconds = Math.abs(now - datePosted);
    const minutes = Math.ceil(milliseconds / (1000 * 60));
    const hours = Math.ceil(milliseconds / (1000 * 60 * 60));
    const days = Math.ceil(milliseconds / (1000 * 60 * 60 * 24));
    let postTimer;
    if (minutes < 60) {
    postTimer = <>{minutes} minutes ago</>;
    } else if (hours < 24) {
    postTimer = <>{hours} hours ago</>;
    } else {
    postTimer = <>{days} days ago</>;
    }

    if(!sessionUser){
        return (
            <div className="video-section">
            <div>
                <video height='700' width={1000} title={video.title} src={video.video} type='video/mp4' controls/>
            </div>
            <div className="section">
                <div className="page-title">{video.title}</div>
                <div className="timer-edit-delete">
                    <div className="page-timer">{video.timeCreated.split(' ').slice(1, 4).join(' ')}</div>
                </div>
            </div>
            <div className="section">
                <div className="pic-username">
                    <div className="page-pfp-div">
                        <img className="profile-image-video-list" src={video.user.profilePicture} alt=''/>
                    </div>
                    <div className="page-username">
                        {video.user.username}
                    </div>
                </div>
                <div className="video-description">{video.description}</div>
            </div>
            <div>
                <div>
                    <h4>{video.comments.length === 1 ? `${video.comments.length} Comment` : `${video.comments.length} Comments`} </h4>
                </div>
                {!video.comments.length ? <div>No Reviews Yet</div> : video.comments.map(comment => (
                    <div key={comment.id}>{comment.user.username},{' '}{comment.comment}</div>
                ))}
            </div>
        </div>
        )
    }

    return isLoaded && (
        <div className="video-section">
            <div>
                <video height='700' width={1000} title={video.title} src={video.video} type='video/mp4' controls/>
            </div>
            <div className="section">
                <div className="page-title">{video.title}</div>
                <div className="timer-edit-delete">
                    <div className="page-timer">{video.timeCreated.split(' ').slice(1, 4).join(' ')}</div>
                    <div>{video.ownerId === sessionUser.id  ? <div className="edit-delete"> <EditVideoModal video={video}/> <DeleteVideoModal video={video} setIsLoaded={setIsLoaded} /> </div>: null}</div>
                </div>
            </div>
            <div className="section">
                <div className="pic-username">
                    <div className="page-pfp-div">
                        <img className="profile-image-video-list" src={video.user.profilePicture} alt=''/>
                    </div>
                    <div className="page-username">
                        {video.user.username}
                    </div>
                </div>
                <div className="video-description">{video.description}</div>
            </div>
            <div>
                <div>
                    <h4>{video.comments.length === 1 ? `${video.comments.length} Comment` : `${video.comments.length} Comments`} </h4>
                </div>
                {!video.comments.length ? <div>No Reviews Yet</div> : video.comments.map(comment => (
                    <div key={comment.id}>{comment.user.username},{' '}{comment.comment}</div>
                ))}
            </div>
        </div>
    )
}

export default Video