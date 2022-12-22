import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./action.type";


// login

export const loginApiCall = (data) => (dispatch) => {
    console.log(data.email,"login")
    dispatch({ type: LOGIN_REQUEST });
   return axios({
        method: "post",
        url: 'https://adrixus.onrender.com/login',
       data: {
        email:data.email,
        password:data.password
       }
    }).then((r) => dispatch({ type: LOGIN_SUCCESS, payload: r.data }))
        .catch((err) => dispatch({ type: LOGIN_FAILURE, payload: err }));
}

// register

export const registerApiCall = (data) => (dispatch) => {
    console.log(data.email,data,"login")
    dispatch({ type: REGISTER_REQUEST });
   return axios({
        method: "post",
        url: 'https://adrixus.onrender.com/register',
       data: {
           first_name: data.first_name,
           last_name:data.last_name,
          email:data.email,
          password:data.password
       }
    }).then((r) => dispatch({ type: REGISTER_SUCCESS, payload: r.data }))
        .catch((err) => dispatch({ type: REGISTER_FAILURE, payload: err }));
}

