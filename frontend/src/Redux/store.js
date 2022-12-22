import { legacy_createStore,applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import{reducer} from "./UserReducer/reducer"
const rootReducer = combineReducers({
    user:reducer
});


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));