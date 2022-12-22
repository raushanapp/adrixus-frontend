import { legacy_createStore,applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as userReducer } from "./UserReducer/reducer";
import { reducer as authReducer } from "./AuthReducer/reducer";
const rootReducer = combineReducers({
    user: userReducer,
    auth:authReducer
});


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));