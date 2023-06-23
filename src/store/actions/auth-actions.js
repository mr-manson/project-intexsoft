import {authAPI} from "../../api/auth-api"
import { signInAction } from "../auth-reducer";

export const signIn = (email, password) => {
    return (dispatch) => {
        const res = authAPI.signIn(email, password);
        dispatch(signInAction(res.data));
    }
}