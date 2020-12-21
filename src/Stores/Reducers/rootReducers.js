import Axios from 'axios';
import React from 'react'

const initialState ={
    Categories : null
}

const rootReducers = (state=initialState, action) => {
    console.log("Reducer", action)
    switch (action.type) {
        case 'GETCATEGORIES':
            
            return{
                ...state,
                Categories : action.data
            }
            
            break;
    
        default:
            break;
    }
    return state
}

export default rootReducers