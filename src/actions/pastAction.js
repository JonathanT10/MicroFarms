import axios from 'axios';
import {  FETCH_MEMBERPPO } from './types';

export const fetchIdMemberPO = (member_id) => dispatch => {
    axios.get(`http://localhost:5000/api/patron/${member_id}`)
        .then(member => dispatch({
            type: FETCH_MEMBERPPO,
            payload: member.data.pastOrders
    }))
    .catch(error => {
        alert("Invalid request")
        console.log('Error', error);
    });
}