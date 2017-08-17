export const moviesReducer = (state = [], action) => {
    switch (action.type){
        case 'LOAD_MOVIES_FULFILLED':
            return action.payload;
        default:
            return state;
    }
};