import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./action.type"

const initialState = {
    isLoading: false,
    isError: false,
    data: []
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST: {
            return {
                isLoading: true,
                isError:false
            }
        }
        case LOGIN_SUCCESS: {
            return {
                isLoading: false,
                isError: false,
                data:payload
            }
        }
        case LOGIN_FAILURE: {
            return {
                isLoading: false,
                isError:true
            }
        }
        case REGISTER_REQUEST: {
            return {
                isLoading: true,
                isError:false
            }
        }
        case REGISTER_SUCCESS: {
            return {
                isLoading: false,
                isError: false,
                data:payload
            }
        }
        case REGISTER_FAILURE: {
            return {
                isLoading: false,
                isError:true
            }
        }
        default: {
            return state
        } 
    }
   
}