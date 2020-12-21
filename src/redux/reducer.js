import {MOVIES} from '../shared/movies';

export const initialState = {
    movies: MOVIES,
    shoppingCart: []
};

export const Reducer = (state = initialState, action) => {
    return state;
};