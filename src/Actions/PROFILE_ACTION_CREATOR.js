import axios from "axios";
import setCurrentUser from './CREDENTIALS_ACTIONS'

export const MyPostsCount = (data) => {

    return { "type" : "MY_POSTS_COUNT", payload: data}
    
}

export  const loadMyPostsCount = (handle) => {

    return (dispatch , getState) => {

        axios.get("https://broadcast-socialmedia-backend.herokuapp.com/Posts/loadPostsCount/"+handle)

        .then((response) => dispatch(MyPostsCount(response.data.data[0].posts.length)))

        .catch((err) => console.log(err))

    }
}

export const MyFollowingCount = (data) => {

    return { "type" : "MY_FOLLOWING_COUNT", payload: data}
    
}

export  const loadMyFollowingCount = (handle) => {

    return (dispatch , getState) => {

        axios.get("https://broadcast-socialmedia-backend.herokuapp.com/handles/loadBuddyListCount/"+handle)

        .then((response) => dispatch(MyFollowingCount(response.data.data)))

        .catch((err) => console.log(err))

    }
}

export  const updateNameInDatabase = (handle ,name) => {

    let data = {

        "handle" : handle,
        "name" : name
    }

    return (dispatch , getState) => {

        axios.put("https://broadcast-socialmedia-backend.herokuapp.com/updateNameInDatabase",data)

        .then((response) => {
            dispatch(setCurrentUser(response.data.user))
            alert(response.data.message)
        })

        .catch((err) => console.log(err))

    }
}

export  const updateMobileInDatabase = (handle ,mobile) => {

    let data = {

        "handle" : handle,
        "mobile" : mobile
    }

    return (dispatch , getState) => {

        axios.put("https://broadcast-socialmedia-backend.herokuapp.com/updateMobileInDatabase",data)

        .then((response) => {
            dispatch(setCurrentUser(response.data.user))
            alert(response.data.message)
        })

        .catch((err) => console.log(err))

    }
}

export  const updateEmailInDatabase = (handle ,email) => {

    let data = {

        "handle" : handle,
        "email" : email
    }

    return (dispatch , getState) => {

        axios.put("https://broadcast-socialmedia-backend.herokuapp.com/updateEmailInDatabase",data)

        .then((response) => {
            dispatch(setCurrentUser(response.data.user))
            alert(response.data.message)
        })

        .catch((err) => console.log(err))

    }
}

