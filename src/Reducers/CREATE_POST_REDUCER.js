const initialState = {
    posts : [],
    buddiesPosts : []
}
 const createPost_reducer = (state=initialState , action) => {

    switch(action.type) {

        case "LOAD_POST" : 
            return {...state , posts:action.payload.posts}

        case  "CREATE_POST" :
            let posts = [...state.posts , action.payload]
            return {...state , posts: posts}
        
        case "BUDDY_POSTS" : 
            let buddyPosts = [...state.buddiesPosts , ...action.payload]
            return {...state , buddiesPosts : buddyPosts}
        case "REMOVE_POSTS" : 
            let buddy_posts = [...state.buddiesPosts];
            let handle = action.payload;
            let buddy_posts2 = buddy_posts.filter(obj=>obj.handle !== handle);
            return {...state , buddiesPosts : buddy_posts2}
        case "CLEAR_BUDDY_POSTS" : 
            console.log('enter clear')
            return {...state , buddiesPosts : []}
        default : 
                return state
    }
}

export default createPost_reducer;