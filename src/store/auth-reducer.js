const SIGNUP = "SIGNUP";
const SIGNIN = "SIGNIN";

const initialState = {
    data: {
        id: null,
        email: "",
        refreshToken: "",
        accessToken: "",
    },
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

export const signUp = (email, password) => ({type:SIGNUP, data:{email, password}});

export default authReducer;
