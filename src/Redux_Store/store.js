import { createStore, combineReducers,applyMiddleware } from 'redux'
import  thunk  from 'redux-thunk'

import createPost_reducer from '../Reducers/CREATE_POST_REDUCER'
import credentials_reducer from '../Reducers/CREDENTIALS_REDUCER'
import handles_reducer from '../Reducers/HANDLES_REDUCER'
import profile_reducer from '../Reducers/PROFILE_REDUCER'

const reducers = combineReducers({

    createPost_reducer,
    credentials_reducer,
    handles_reducer,
    profile_reducer

})

export const store = createStore(reducers,applyMiddleware(thunk));