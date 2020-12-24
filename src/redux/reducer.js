import {MOVIES} from '../shared/movies';
import {addItemtoCart, deleteItemfromCart} from './actions';

export const initialState = {
    movies: MOVIES,
    shoppingCart: []
};

export const Movies = (state = MOVIES, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


export const updateCartReducer = (state = {shoppingCart: []}, action) => {
    switch (action.type){
        case addItemtoCart.ADD_ITEM:
            return {...state, shoppingCart: action.payload};
        case deleteItemfromCart.DELETE_ITEM:
            return {...state, shoppingCart: []};
        default:
            return state;
    }
};