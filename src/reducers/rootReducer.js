import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productReducer from './productReducer';
import regReducer from './regReducer';
import userReducer from './userReducer';


export default combineReducers({
    auth: authReducer,
    product: productReducer,
    member: regReducer,
    user: userReducer,
});