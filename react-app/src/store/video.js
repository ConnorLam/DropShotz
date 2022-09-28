const GET_VID = "vid/get-all-vids"
const GET_USERS_VID = "vid/get-users-vids"
const GET_VID_ID = "vid/get-vid-by-id" 

const UPDATE_VID = 'vid/update-vid'
const DELETE_VID = 'vid/delete-vid'



const getVidAction = payload => {
    return {
        type: GET_VID,
        payload
    }
}

const getUsersVidAction = payload => {
    return {
        type: GET_USERS_VID,
        payload
    }
}

const getVidIdAction = payload => {
    return {
        type: GET_VID_ID,
        payload
    }
}

const updateVidAction = payload => {
    return {
        type: UPDATE_VID,
        payload
    }
}

const deleteVidAction = payload => {
    return {
        type: DELETE_VID,
        payload
    }
}

export const getVidThunk = () => async dispatch => {
    const res = await fetch('/api/videos')
    const data = await res.json()

    if (res.ok) {
        await dispatch(getVidAction(data))
    }

    return data
}

export const getUsersVidThunk = () => async dispatch => {
    const res = await fetch('/api/videos/current')
    const data = await res.json()

    if (res.ok) {
        await dispatch(getUsersVidAction(data))
    }

    return data
}

export const getVidIdThunk = (videoId) => async dispatch => {
    const res = await fetch(`/api/videos/${videoId}`)
    const data = await res.json()

    if (res.ok) {
        // console.log(data, 'DATA')
        await dispatch(getVidIdAction(data.video))
    }

    return data
}

export const updateVidThunk = ({video, videoId}) => async dispatch => {
    const res = await fetch(`/api/videos/${videoId}`,
        {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(video)
        }
    )
    const data = await res.json()

    if (res.ok){
        await dispatch(updateVidAction(data))
    }

    return data
}

export const deleteVidThunk = (videoId) => async dispatch => {
    const res = await fetch(`/api/videos/${videoId}`,
        {
            method: 'DELETE'
        }
    )
    const data = await res.json()

    if(res.ok){
        await dispatch(deleteVidAction(data))
    }

    return data
}


const initialState = {}

const videoReducer = (state = initialState, action) => {
    let newState = {...state}
    switch(action.type){
        case(GET_VID): {
            action.payload.videos.forEach(video => {
                newState[video.id] = {...newState[video.id], ...video}
            })
            return newState
        }
        case(GET_USERS_VID): {
            action.payload.videos.forEach(video => {
                newState[video.id] = { ...newState[video.id], ...video}
            })
            return newState
        }
        case(GET_VID_ID): {
            // console.log([action.payload.id], 'INSIDE REDUCER')
            newState[action.payload.id] = { ...newState[action.payload.id], ...action.payload}
            return newState
        }
        default: {
            return state
        }
    }
}

export default videoReducer