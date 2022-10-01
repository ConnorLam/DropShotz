const GET_VID_COMMENTS = "vid/get-vid-comments"

const CREATE_COMMENT = "vid/create-comment"
const UPDATE_COMMENT = "vid/update-comment"
const DELETE_COMMENT = "vid/delete-comment"




const getVidCommentAction = payload => {
    return {
        type: GET_VID_COMMENTS,
        payload
    }
}

const createCommentAction = payload => {
    return {
        type: CREATE_COMMENT,
        payload
    }
}

const updateCommentAction = payload => {
    return {
        type: UPDATE_COMMENT,
        payload
    }
}

const deleteCommentAction = payload => {
    return {
        type: DELETE_COMMENT,
        payload
    }
}




export const getVidCommentThunk = (videoId) => async dispatch => {
    const res = await fetch(`/api/videos/${videoId}/comments`)
    const data = await res.json()
    console.log(data)

    if (res.ok){
        await dispatch(getVidCommentAction(data))
    }

    return data
}

export const createCommentThunk = ({videoId, comment}) => async dispatch => {

    const res = await fetch(`/api/videos/${videoId}/comments`,
        {
            method: "POST",
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(comment)
        }
    )

    const data = await res.json()

    if(res.ok){
        
        await dispatch(createCommentAction(data))
    }

    return data
}

export const updateCommentThunk = ({commentId, comment}) => async dispatch => {
    const res = await fetch(`/api/comments/${commentId}`,
        {
            method: 'PUT',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(comment)
        }
    )
    const data = await res.json()
    if(res.ok){
        await dispatch(updateCommentAction(data))
    }

    return data
}


export const deleteCommentThunk = (commentId) => async dispatch => {
    const res = await fetch(`/api/comments/${commentId}`,
        {
            method: 'DELETE'
        }
    )

    const data = await res.json()

    if(res.ok){
        await dispatch(deleteCommentAction(commentId))
    }

    return data
}

const initialState = {}

const commentsReducer = (state = initialState, action) => {
    let newState = {};
    switch(action.type){
        case (GET_VID_COMMENTS): {
            action.payload.Comments.forEach(comment => {
                newState[comment.id] = comment
            })
            return newState
        }
        case (CREATE_COMMENT): {
            newState = { ...state }
            // console.log('fasjkdfasjlfahjsd', action.payload)
            newState[action.payload.id] = {...action.payload}
            return newState
        }
        case (UPDATE_COMMENT): {
            newState = {...state}
            newState[action.payload.id] = {...newState[action.payload.id], ...action.payload}
            return newState
        }
        case (DELETE_COMMENT): {
            newState = {...state}
            delete newState[action.payload]
            return newState
        }
        default: {
            return state
        }
    }
}

export default commentsReducer