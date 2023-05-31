const initialState = {
    data: 1,
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case "ADD":
            return {...state, data: state.data + action.payload};
        case "GET":
            return {...state, data: state.data - action.payload};
        default:
            return state;
    }
};

export default reducer;
