
import * as ActionTypes from './actionTypes';


export const addMovie = (movie) =>({
    type: ActionTypes.ADD_MOVIE,
    payload: movie
});


 export const deleteItemfromCart = (id) => ({
    type: ActionTypes.DELETE_ITEM,
    payload: id
});





