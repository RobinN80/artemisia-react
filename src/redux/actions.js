
import * as ActionTypes from './actionTypes';


export const addTickets = (ticket) =>({
    type: ActionTypes.ADD_TICKETS,
    payload: ticket
});


 export const deleteItemFromCart = (id) => ({
    type: ActionTypes.DELETE_ITEM,
    payload: id
});





