import { NEW_REGISTRATION } from './types';
import axios from 'axios';


export const memberReg = (postpReg) => dispatch => {
    axios.post(`http://localhost:5000/api/member/`,{
            name: postpReg.name,
            email: postpReg.email,
            password: postpReg.password,
        })
        .then(postpReg => dispatch({
            type: NEW_REGISTRATION,
            payload: postpReg.data

    }))
    .catch(error => {
        alert("Invalid request")
        console.log('Error', error);
        window.location = "/"
    });
}
