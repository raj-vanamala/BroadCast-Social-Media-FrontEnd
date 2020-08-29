const initialState = {
    
    handles : [],
    buddyList : [],
    followersList : []
}

const handles_reducer = (state=initialState , action) => {

    switch(action.type) {

        case "LOAD_HANDLES" : 

            let data = action.payload.data.filter(obj=>obj.handle !== action.payload.handle)
            let handles = data.map(obj=>obj.handle)
        
            let data1 = [];
        
            for (const handle of handles) {
        
                if(!(action.payload.userFollowing.includes(handle))) {
        
                    data1.push(handle);
        
                }
            }
            return {...state , handles : data1}
        case "LOAD_BUDDY" :
            return {...state , buddyList : action.payload}
        case "LOAD_FOLLOWERS" : 
            return {...state , followersList : action.payload}
        default : 
            return state
    }
}

export default handles_reducer;