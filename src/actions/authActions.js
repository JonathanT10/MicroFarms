import { NEW_AUTH } from './types';
import axios from 'axios';



export const logIn = (postpAuth) => dispatch =>{
    axios.post(`http://localhost:5000/api/auth/`, {
            email: postpAuth.email, 
            password: postpAuth.password
        })
        .then(pAuth => dispatch({
            type: NEW_AUTH,
            paload: pAuth.data
        }))
        .then(response => {
            const  token  = response.paload;
            localStorage.setItem('token', token);
            window.location="/patronmain";
        }).catch(error => {
            alert("Username or Password invalid, please try again")
            console.log('Error', error);
        });
}