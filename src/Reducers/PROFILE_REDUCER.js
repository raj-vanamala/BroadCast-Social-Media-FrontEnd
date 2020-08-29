const initialState = {

    PostsCount : "",
    FollowingCount : ""
}

const profile_reducer = (state=initialState , action) => {

    switch(action.type) {
        case "MY_POSTS_COUNT": 
            return {...state , PostsCount : action.payload}
        case "MY_FOLLOWING_COUNT" : 
            return {...state , FollowingCount : action.payload}
        default : 
            return state
    }
}

export default profile_reducer;