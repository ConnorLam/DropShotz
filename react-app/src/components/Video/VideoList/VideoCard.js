import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";


function VideoCard({video}){



    return (
        <div>
            <NavLink to={`/videos/${video.id}`}>
                {/* <div>
                    <h3>{video.title}</h3>
                </div> */}
                <div>
                    <video width='400' height='300' src={video.video} type='video/mp4' />
                </div>
                <div>
                    <h3>{video.title}</h3>
                </div>
            </NavLink>
        </div>
    )
}

export default VideoCard