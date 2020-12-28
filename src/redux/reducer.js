import {MOVIES} from '../shared/movies';
import * as ActionTypes from './actionTypes';

/*export const initialState = {
    movies: MOVIES,
    shoppingCart: []
};*/

export const Movies = (state = MOVIES, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


export const updateCartReducer = (state = [], action) => {
    switch (action.type){
        case ActionTypes.ADD_ITEM:
            return [
                ...state, 
                {
                    title: action.payload.title,
                    numRegular: action.payload.numRegular,
                    numSenStud: action.payload.numSenStud,
                    numMembers: action.payload.numMembers
                }];
        case ActionTypes.DELETE_ITEM:
            return state.filter(movie => movie.title != action.payload.title);
        default:
            return state;
    }
};