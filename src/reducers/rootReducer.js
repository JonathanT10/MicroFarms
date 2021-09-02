import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productReducer from './productReducer';
import regReducer from './regReducer';


export default combineReducers({
    auth: authReducer,
    product: productReducer,
    member: regReducer,
});