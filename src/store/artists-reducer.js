const SET_ARTISTS = "SET_ARTISTS";

const initialState = {
    artists: [],
};

const artistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ARTISTS:
            return{
                ...state,
                artists: [...state.artists, action.artists]
            }
        default:
            return  state;
    }
}

export const setArtists = (artists) => ({type:SET_ARTISTS, artists});

export default artistsReducer;