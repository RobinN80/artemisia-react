
import * as ActionTypes from './actionTypes';


export const addMovie = (title) => {
    return {
        type: ActionTypes.ADD_MOVIE,
        payload: title
    }
};

export const addRegTicket = (title, numRegular) => ({
    type: ActionTypes.ADD_REG_TICKET,
    payload: {
        title,
        numRegular
    }
})

 export const deleteItemfromCart = (id) => ({
    type: ActionTypes.DELETE_ITEM,
    payload: id
});





