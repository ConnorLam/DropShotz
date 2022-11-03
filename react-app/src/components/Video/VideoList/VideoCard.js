import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";


function VideoCard({video}){

    const datePosted = new Date(video.timeCreated);
    // console.log(datePosted)
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

    // console.log(video.user)

    return (
        <div className="each-video">
            <NavLink className='navlink' to={`/videos/${video.id}`}>
                {/* <div>
                    <h3>{video.title}</h3>
                </div> */}
                <div className="video">
                    <video src={video.video} type='video/mp4' />
                </div>
                <div className="no-video">
                    <div className="title">
                        <div className="prof-pic-div">
                            <NavLink to={`/users/${video.ownerId}`}>
                                <img className="profile-image-video-list" src={video.user.profilePicture} alt=''/>
                            </NavLink>
                        </div>
                        <div className="video-title-list">
                            {video.title}
                        </div>
                    </div>
                    <div className="second-row">
                            <div className="username">
                                <NavLink className='navlink username-nav go-to-user' to={`/users/${video.ownerId}`}>
                                    <span className="go-to-user">{video.user.username}</span>
                                </NavLink>
                            </div>
                    </div>
                    <div className="timer">
                        {postTimer}
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default VideoCard