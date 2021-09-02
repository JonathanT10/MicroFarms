import { NEW_CART, FETCH_MEMBER, NEW_PASTORDERS, EMPTY_CART } from './types';
import axios from 'axios';




export const addCart = (member_id, product_id) => dispatch => {
    axios.post(`http://localhost:5000/api/patron/${member_id}/cart/${product_id}`,{
    })
    .then(product => dispatch({
        type: NEW_CART,
        payload: product
    }))
    .catch(error => {
        alert("Invalid request")
        console.log('Error', error);
    });
}

export const emptyCart = (member_id) => dispatch => {
    axios.put(`http://localhost:5000/api/patron/${member_id}/empty`)
    .then(cart => dispatch({
        type: EMPTY_CART,
        payload: cart
    }))
    .catch(error => {
        alert("Invalid request")
        console.log('Error', error);
    });
}

export const addPastOrders = (member_id) => dispatch => {
    axios.put(`http://localhost:5000/api/patron/${member_id}/pastorders`,{
    
    })
    .then(cart => dispatch({
        type: NEW_PASTORDERS,
        payload: cart
    }))
    .catch(error => {
        alert("Invalid request")
        console.log('Error', error);
    });
}


export const fetchIdMember = (member_id) => dispatch => {
    axios.get(`http://localhost:5000/api/patron/${member_id}`)
        .then(member => dispatch({
            type: FETCH_MEMBER,
            payload: member.data.cart
    }))
    .catch(error => {
        alert("Invalid request")
        console.log('Error', error);
    });
}

