import axios from "axios";
import { USER_API_FAILURE, USER_API_REQUEST, USER_API_SUCCESS } from "./action.type";


export const userApiCall = () => (dispatch) => {
    
    dispatch({ type: USER_API_REQUEST });
    axios.get("https://adrixus.onrender.com/users")
        .then((r) => dispatch({ type: USER_API_SUCCESS, payload: r.data }))
        .catch((err) => dispatch({ type: USER_API_FAILURE, payload: err }));
}

// search api call and sorting

export const searchApiCall=(parmas) => (dispatch) => {
    console.log(parmas,"prams");
    dispatch({ type: USER_API_REQUEST });
    axios.get(`https://adrixus.onrender.com/users?first_name=${parmas}`)
        .then((r) => dispatch({ type: USER_API_SUCCESS, payload: r.data }))
        .catch((err) => dispatch({ type: USER_API_FAILURE, payload: err }));
}

export const sortApiCall=(parmas) => (dispatch) => {
    console.log(parmas,"prams");
    dispatch({ type: USER_API_REQUEST });
    axios.get(`https://adrixus.onrender.com/users?sort=${parmas}`)
        .then((r) => dispatch({ type: USER_API_SUCCESS, payload: r.data }))
        .catch((err) => dispatch({ type: USER_API_FAILURE, payload: err }));
}