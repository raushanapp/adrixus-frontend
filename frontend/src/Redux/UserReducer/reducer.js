import { USER_API_FAILURE, USER_API_REQUEST, USER_API_SUCCESS } from "./action.type";


const initialState = {
    isLoading: false,
    isError: true,
    data:[]
}

export const reducer = (state = initialState, { type, payload }) => {
    
    switch (type) {
        case USER_API_REQUEST: {
            return {
                isLoading: true,
                isError:false
            }
        }
        case USER_API_SUCCESS: {
            return {
                isLoading: false,
                isError: false,
                data:payload
            }
        }
        case USER_API_FAILURE: {
            return {
                isLoading: false,
                isError:true
            }
        }
        default: {
            return state;
        }
    }
}