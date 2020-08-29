import axios from 'axios'
import { loadMyFollowingCount } from './PROFILE_ACTION_CREATOR'
import { removeUnFollowedHandlePosts } from './CREATE_POST_ACTIONS'

const loadHandles = (data) => {
    return { "type" : "LOAD_HANDLES", payload : data}
}

export const loadHandlesBackend = (handle) => {

    return (dispatch,getState) => {

        axios.get(`https://broadcast-socialmedia-backend.herokuapp.com/handles/loadHandles/${handle}`)

        .then((response)=>{
            dispatch(loadHandles(response.data))
        })

        .catch((err)=>console.log(err))
    }
}

const loadBuddyList = (buddyList) => {

    return { "type" : "LOAD_BUDDY" , payload : buddyList}
    
}

export  const loadBuddyListBackend = (handle) => {

    return (dispatch , getState) => {

        axios.get("https://broadcast-socialmedia-backend.herokuapp.com/handles/loadBuddyList/"+handle)

        .then((response) => {
            dispatch(loadBuddyList(response.data.data))
        })

        .catch((err) => console.log(err))

    }
}

const loadFollowersList = (followersList) => {

    return { "type" : "LOAD_FOLLOWERS" , payload : followersList}
    
}

export  const loadFollowersListBackend = (handle) => {

    return (dispatch , getState) => {

        axios.get("https://broadcast-socialmedia-backend.herokuapp.com/handles/loadFollowers/"+handle)

        .then((response) => dispatch(loadFollowersList(response.data)))

        .catch((err) => console.log(err))

    }
}

export  const followHandle = (userHandle , handle) => {

    return (dispatch , getState) => {

        let data = {

            "userHandle" : userHandle ,
            "handle" : handle
        }

        axios.post("https://broadcast-socialmedia-backend.herokuapp.com/handles/addHandleToBuddyList/" , data)

        .then((response) => {
            alert(response.data.message)
        })
        .then(() => {
            dispatch(loadBuddyListBackend(userHandle))
            dispatch(loadHandlesBackend(userHandle))
            dispatch(loadMyFollowingCount(userHandle))
        })

        .catch((err) => console.log(err))

    }
}

export  const UnFollowHandle = (userHandle , handle) => {

    return (dispatch , getState) => {

        axios.delete(`https://broadcast-socialmedia-backend.herokuapp.com/handles/UnFollowHandle/${userHandle}/${handle}`)

        .then((response) => {
            alert(response.data.message)
        })
        .then(() => {
            dispatch(loadBuddyListBackend(userHandle))
            dispatch(loadHandlesBackend(userHandle))
            dispatch(loadMyFollowingCount(userHandle))
            dispatch(removeUnFollowedHandlePosts(handle))
        })

        .catch((err) => console.log(err))

    }
}
