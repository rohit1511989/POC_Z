import {CLEAR_PAGE, GET_PAGES,USERS_ERROR} from '../type';
import axios from 'axios';


  export const getPosts = (page) => async dispatch => {
    try{
        const res = await axios.get(`http://localhost:3002/api/items?page=${page}`)
        dispatch( {
            type: GET_PAGES,
            payload: res.data
        })
    }
    catch(error){
        dispatch( {
            type: USERS_ERROR,
            payload: error,
        })
    }
}