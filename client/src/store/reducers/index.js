import { combineReducers } from 'redux'
import vehicleReducer from './vehicleReducer'
export default combineReducers({
  vehicleData : vehicleReducer
})