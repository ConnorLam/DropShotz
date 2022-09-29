import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import EditVideoModal from "../EditVideo/EditVideoModal";
import DeleteVideoModal from "../EditVideo/DeleteVideoModal";


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
    if(!sessionUser){
        return (
            <div>
            <div style={{height: '500px', width: '700px'}}>
                <video height='500' width={700} title={video.title} src={video.video} type='video/mp4' controls/>
            </div>
            <div>
                <h3>{video.title}</h3>
                {/* <p>{Date.now() - video.timeCreated}</p> */}
            </div>
            <div>
                <h3>Description</h3>
                <div>{video.description}</div>
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

    return isLoaded && (
        <div>
            <div style={{height: '500px', width: '700px'}}>
                <video height='500' width={700} title={video.title} src={video.video} type='video/mp4' controls/>
            </div>
            <div>
                <h3>{video.title}</h3>
                <div>{video.ownerId === sessionUser.id  ? <div> <EditVideoModal video={video}/> <DeleteVideoModal video={video} setIsLoaded={setIsLoaded} /> </div>: null}</div>
                {/* <p>{Date.now() - video.timeCreated}</p> */}
            </div>
            <div>
                <h3>Description</h3>
                <div>{video.description}</div>
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