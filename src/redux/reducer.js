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

const lastId = 0;

export const updateCartReducer = (state = [], action) => {
    switch (action.type){
        case ActionTypes.ADD_MOVIE:
            return [
                ...state, 
                {   
                    id: ++lastId,
                    title: action.payload.title,
                }];
        case ActionTypes.ADD_REG_TICKET:
            return state.map( 
                movie => movie.title !== action.payload.title ? 
                movie :
                ({...movie, numRegular : action.payload.numRegular}) );
        case ActionTypes.DELETE_ITEM:
            return state.filter(movie => movie.title != action.payload.title);
        default:
            return state;
    }
};