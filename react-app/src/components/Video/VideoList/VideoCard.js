import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";


function VideoCard({video}){

    const datePosted = new Date(video.timeCreated);
    console.log(datePosted)
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

    return (
        <div className="each-video">
            <NavLink className='navlink' to={`/videos/${video.id}`}>
                {/* <div>
                    <h3>{video.title}</h3>
                </div> */}
                <div className="video">
                    <video width='300' height='200' src={video.video} type='video/mp4' />
                </div>
                <div>
                    <p>{video.title}</p>
                </div>
                <div>
                    <p>{video.user.username}</p>
                </div>
                <div>
                    <p>{postTimer}</p>
                </div>
            </NavLink>
        </div>
    )
}

export default VideoCard