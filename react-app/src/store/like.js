const GET_VID_LIKES = 'vid/get-vid-likes'
const LIKE_VID = 'vid/create-like'
const DISLIKE_VID = 'vid/delete-like'

const getVidLikesAction = (payload) => {
    return {
        type: GET_VID_LIKES,
        payload
    }
}

const createLikeAction = (payload) => {
    return {
        type: LIKE_VID,
        payload,
    };
};

const deleteLikeAction = (payload) => {
    return {
        type: DISLIKE_VID,
        payload,
    };
};

export const getVidLikeThunk = (videoId) => async dispatch => {
    const res = await fetch(`/api/videos/${videoId}/likes`)
    const data = await res.json()

    if(res.ok){
        await dispatch(getVidLikesAction(data))
    }

    return data
}

export const createLikeThunk = ({videoId, userId}) => async dispatch => {
    const res = await fetch(`/api/videos/${videoId}/like`, {
        method: 'POST',
        // headers: {"Content-type": "application/json"},
        // body: JSON.stringify()
        videoId,
        userId
    })

    const data = await res.json()

    if(res.ok){
        await dispatch(createLikeAction(data))
    }

    return data
}

export const deleteLikeThunk = (likeId) => async dispatch => {
    const res = await fetch(`/api/videos/likes/${likeId}`, {
        method: 'DELETE'
    })

    const data = await res.json()

    if(res.ok){
        await dispatch(deleteLikeAction(likeId))
    }

    return data
}

const initialState = {}

const likesReducer = (state = initialState, action) => {
    let newState = {}
    switch(action.type){
        case(GET_VID_LIKES): {
            action.payload.Likes.forEach(like => {
                newState[like.id] = like
            })

            return newState
        }
        case (LIKE_VID): {
            newState = { ...state }
            newState[action.payload.id] = {...action.payload}
            return newState
        }
        case (DISLIKE_VID): {
            newState = { ...state }
            delete newState[action.payload]
            return newState
        }
        default: {
            return state
        }
    }
}

export default likesReducer