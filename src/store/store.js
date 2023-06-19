import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./auth-reducer";

const rootReducer = combineReducers({
    authReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;