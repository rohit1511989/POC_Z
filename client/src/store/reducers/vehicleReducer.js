import {SHOW_DATA, CLEAR_DATA, SAVE_TO_STATE, USERS_ERROR, GET_PAGES } from '../type'
const initialState = {
    vehicle : [],
    showData : false,
    loading : true,
    pageItems : []
};

export default function( state = initialState, action) {

    switch(action.type){ 
        case SHOW_DATA :
            return { ...state, showData: true }
        case  CLEAR_DATA :
            return { ...state, showData: false }
        case  SAVE_TO_STATE:
            return { ...state, pageItems: action.payload  }
        case GET_PAGES:
            return{...state, pageItems: action.payload }    
        case USERS_ERROR:
            return{
                showData: false, 
                error: action.payload,
                loading:false
            }
        default: 
            return state
    
        }
}
