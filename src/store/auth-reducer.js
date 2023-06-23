const SIGNUP = "SIGNUP";
const SIGNIN = "SIGNIN";

const initialState = {
    id: null,
    email: "",
    refreshToken: "",
    accessToken: "",
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case SIGNUP:
            return state;
        case SIGNIN:
            return {
                ...state,

                id: action.data.user.id,
                email: action.data.user.email,
                refreshToken: action.data.refreshToken,
                accessToken: action.data.accessToken,
                isAuth: true,
            };
        default:
            return state;
    }
};

export const signUp = (payload) => ({type: SIGNUP, payload});
export const signInAction = (data) => ({type: SIGNIN, data});

export default authReducer;
