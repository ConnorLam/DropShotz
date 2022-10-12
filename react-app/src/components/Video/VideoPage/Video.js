import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import EditVideoModal from "../EditVideo/EditVideoModal";
import DeleteVideoModal from "../EditVideo/DeleteVideoModal";
import './index.css'
import EditCommentModal from "../../Comment/UpdateComment/EditCommentModal";
import DeleteCommentModal from "../../Comment/DeleteComment/DeleteCommentModal";

import CommentForm from "../../Comment/CreateComment/CreateComment";
import { createLikeThunk, deleteLikeThunk } from "../../../store/like";



const Video = ({video, commentsList, isLoaded, setIsLoaded, likesList}) => {
    // console.log(video.comments)
    // const [users, setUsers] = useState([]);
    // console.log(users)
    const dispatch = useDispatch()
    const history = useHistory()

    const sessionUser = useSelector(state => state.session.user)

    // const [isLoaded, setIsLoaded] = useState(true)
    // if(sessionUser.id ){

    // }

    const likesId = likesList.map(like => {
        return like.userId
        // gets the user id of each like so we can see if user already has a like
    })

    // console.log(likesId.includes(sessionUser.id))
    // console.log(likesList[likesId.indexOf(sessionUser.id)].id)

    const likeOrDislike = async () => {

        if(!sessionUser){
            alert('Must be logged in to like a post')
            return history.push('/login')
        }

        if(likesId.includes(sessionUser.id)){
            await dispatch(deleteLikeThunk(likesList[likesId.indexOf(sessionUser.id)].id))
        }
        else{
            const payload = {videoId: video.id, userId: sessionUser.id}
            await dispatch(createLikeThunk(payload))
        }
    }

    

    // const handleClick = async e => {
    //     // e.preventDefault()
    //     // if (sessionUser.id)
    // }



    if(!sessionUser){
        return isLoaded && (
            <div className="video-section">
            <div>
                <video className="video-on-page" title={video.title} src={video.video} type='video/mp4' controls/>
            </div>
            <div className="section">
                <div className="first-section">
                    <div className="page-title">{video.title}</div>
                    <div className="likes">
                        <i onClick={() => likeOrDislike()} className="fa-solid fa-thumbs-up like-button"></i>&nbsp;&nbsp;
                        <div>{likesList.length === 1 ? `${likesList.length} like` : `${likesList.length} likes` }</div>
                    </div>
                </div>
                <div className="timer-edit-delete">
                    <div className="page-timer">{video.timeCreated.split(' ').slice(1, 4).join(' ')}</div>
                </div>
            </div>
            <div className="section">
                    <div className="pic-username">
                        <div className="page-pfp-div">
                            <NavLink className='navlink go-to-user' to={`/users/${video.ownerId}`}>
                                <img className="profile-image-video-list" src={video.user.profilePicture} alt=''/>
                            </NavLink>
                        </div>
                        <div className="page-username">
                            <NavLink className='navlink username-nav go-to-user' to={`/users/${video.ownerId}`}>
                                <span className="go-to-user">{video.user.username}</span>
                            </NavLink>
                        </div>
                    </div>
                <div className="video-description">
                    {video.description}
                </div>
            </div>
            {/* <div>
                <CommentForm video={video}/>
            </div> */}
            <div>
                <div>
                    <div className="comment-count">{commentsList.length === 1 ? `${commentsList.length} Comment` : `${commentsList.length} Comments`} </div>
                </div>
                {!commentsList.length ? <div>No Reviews Yet</div> : commentsList.map(comment => (
                    <div className='each-comment' key={comment.id}>
                        <div className="pic-username">
                            <div className="page-pfp-div">
                                <NavLink to={`/users/${comment.user.id}`}>
                                    <img className='profile-image-video-list' src={comment.user.profilePicture} alt=''/>
                                </NavLink>
                            </div>
                            <div className='comment-username'>
                                <NavLink className='navlink username-nav go-to-user' to={`/users/${comment.user.id}`}>
                                    {comment.user.username}:
                                </NavLink>
                            </div>
                        </div>
                        <div className="second-half-comment">
                            <div className="comment">
                                {comment.comment}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
    }

    return isLoaded && (
        <div className="video-section">
            <div>
                <video className="video-on-page" title={video.title} src={video.video} type='video/mp4' controls/>
            </div>
            <div className="section">
                <div className="first-section">
                    <div className="page-title">{video.title}</div>
                    <div className="likes">
                        <i onClick={() => likeOrDislike()} className="fa-solid fa-thumbs-up like-button" id={likesId.includes(sessionUser.id) ? 'is-liked' : 'not-liked'}></i>&nbsp;&nbsp;
                        <div id={likesList.length === 1 ? 'one-like' : 'many-likes'}>{likesList.length === 1 ? `${likesList.length} like` : `${likesList.length} likes` }</div>
                    </div>
                </div>
                <div className="timer-edit-delete">
                    <div className="page-timer">{video.timeCreated.split(' ').slice(1, 4).join(' ')}</div>
                    <div>{video.ownerId === sessionUser.id  ? <div className="edit-delete"> <EditVideoModal video={video}/> <DeleteVideoModal video={video} setIsLoaded={setIsLoaded} /> </div>: null}</div>
                </div>
            </div>
            <div className="section">
                <div className="pic-username">
                    <div className="page-pfp-div">
                        <NavLink className='navlink go-to-user' to={`/users/${video.ownerId}`}>
                            <img className="profile-image-video-list" src={video.user.profilePicture} alt=''/>
                        </NavLink>
                    </div>
                    <div className="page-username">
                        <NavLink className='navlink username-nav go-to-user' to={`/users/${video.ownerId}`}>
                            <span className="go-to-user">{video.user.username}</span>
                        </NavLink>
                    </div>
                </div>
                <div className="video-description">
                    {video.description}
                </div>
            </div>
            <div>
                <CommentForm video={video}/>
            </div>
            <div>
                <div>
                    <div className="comment-count">{commentsList.length === 1 ? `${commentsList.length} Comment` : `${commentsList.length} Comments`} </div>
                </div>
                {!commentsList.length ? <div>No Reviews Yet</div> : commentsList.map(comment => (
                    <div className='each-comment' key={comment.id}>
                        <div className="pic-username">
                            <div className="page-pfp-div">
                                <NavLink to={`/users/${comment.user.id}`}>
                                    <img className='profile-image-video-list' src={comment.user.profilePicture} alt=''/>
                                </NavLink>
                            </div>
                            <div className='comment-username'>
                                <NavLink className='navlink username-nav go-to-user' to={`/users/${comment.user.id}`}>
                                    {comment.user.username}:
                                </NavLink>
                            </div>
                        </div>
                        <div className="second-half-comment">
                            <div className="comment">
                                {comment.comment}
                            </div>
                                {
                                    comment.userId === sessionUser.id ?
                                    <div className="edit-delete-comment-button">
                                        <div>
                                            <EditCommentModal video={video} comment={comment}/>
                                        </div>
                                        <div className="delete-left-spacer">
                                            <DeleteCommentModal video={video} comment={comment}/>
                                        </div>
                                    </div>
                                    : null
                                }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Video