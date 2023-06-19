import api from "../../api/api";

export const signIn = (email, password) => {
    return async (dispatch) => {
        const res = await api.post("signup", {email, password});
        dispatch(signIn(res.data));
    }
}