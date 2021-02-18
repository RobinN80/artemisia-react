
import * as ActionTypes from './actionTypes';


export const addTickets = (ticket) =>({
    type: ActionTypes.ADD_TICKETS,
    payload: ticket
});


 export const deleteItemFromCart = (ticket) => ({
    type: ActionTypes.DELETE_ITEM,
    payload: ticket
});





