const SIGNUP = "SIGNUP";
const SIGNIN = "SIGNIN";

const initialState = {
    id: null,
    email: "nikola777jr@gmail.com",
    refreshToken: "",
    accessToken: "",
    count: 2,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP:
            return state;
        case SIGNIN:
            return {
                ...state,
                data: {
                    id: action.id,
                    email: action.email,
                    refreshToken: action.refreshToken,
                    accessToken: action.accessToken,
                },
                isAuth: true,
            };
        default:
            return state;
    }
};

export const signUp = (payload) => ({type: SIGNUP, payload});
export const signIn = (payload) => ({type: SIGNIN, payload});

export default authReducer;
