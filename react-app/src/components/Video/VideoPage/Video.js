import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const Video = ({video}) => {
    console.log(video.comments)
    const [users, setUsers] = useState([]);

    useEffect(() => {
    async function fetchData() {
        const response = await fetch("/api/users/");
        const responseData = await response.json();
        setUsers(responseData.users);
    }
    fetchData();
    }, []);

    return (
        <div>
            <div>
                <video height='500' width={700} title={video.title} src={video.video} type='video/mp4' controls/>
            </div>
            <div>
                <h3>{video.title}</h3>
                {/* <p>{Date.now() - video.timeCreated}</p> */}
            </div>
            <div>
                <div>
                    <h4>Comments</h4>
                </div>
                {video.comments.map(comment => (
                    <div key={comment.id}>{comment.comment}, {comment.userId}</div>
                ))}
            </div>

        </div>
    )
}

export default Video