import {MOVIES} from '../shared/movies';
import * as ActionTypes from './actionTypes';

export const Movies = (state = MOVIES, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


export const updateCartReducer = (state = {movies: []}, action) => {
    switch (action.type){
        case ActionTypes.ADD_MOVIE:
            console.log("action payload", action.payload);
            return {
                ...state, movies: [...state.movies, action.payload]
            };
        case ActionTypes.DELETE_ITEM:
            return state.filter(movie => movie.title !== action.payload.title);
        default:
            return state;
    };
};