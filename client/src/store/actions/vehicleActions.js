import {SAVE_TO_STATE, USERS_ERROR} from '../type';
import axios from 'axios';
export const fetchData = () => async dispatch => {
    try{
        const res = await axios.get(`http://localhost:3002/api/items`)
        dispatch( {
            type: SAVE_TO_STATE,
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