import axios from 'axios'

export const createPost = (data) => {

    return { "type" : "CREATE_POST", payload: data}
    
}

export  const createPostBackend = (handle , postContent) => {

    let data = {

        "handle" : handle,
        "postContent" : postContent
    }

    return (dispatch , getState) => {

        axios.post("https://broadcast-socialmedia-backend.herokuapp.com/Posts/createPost",data)

        .then((response) => dispatch(createPost(data)))

        .catch((err) => console.log(err))

    }
}

const loadPosts = (data) => {

    return { "type" : "LOAD_POST" , payload : data}
    
}

export  const loadPostsBackend = (handle) => {

    return (dispatch , getState) => {

        axios.get("https://broadcast-socialmedia-backend.herokuapp.com/Posts/loadPosts/"+handle)

        .then((response) => dispatch(loadPosts(response.data.data[0])))

        .catch((err) => console.log(err))

    }
}

export const loadBuddyPostsAction = (data) => {


    return { "type" : "BUDDY_POSTS" , payload : data}
    
}

export const loadBuddyPostsBackend = (userHandle , handle) => {

    return (dispatch , getState) => {

        axios.get("https://broadcast-socialmedia-backend.herokuapp.com/Posts/loadBuddyPosts/"+handle)

        .then((response) => {
            dispatch(loadBuddyPostsAction(response.data.data))
        })

        .catch((err) => console.log(err))

    }
}

export const removeUnFollowedHandlePosts = (handle) => {
    return { "type" : "REMOVE_POSTS",payload : handle}
}

export const clearBuddyPosts = () => {


    return { "type" : "CLEAR_BUDDY_POSTS"}
    
}