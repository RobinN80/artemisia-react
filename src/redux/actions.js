
import * as ActionTypes from './actionTypes';


export const addTickets = (ticket) =>({
    type: ActionTypes.ADD_TICKETS,
    payload: ticket
});


 export const deleteItemfromCart = (id) => ({
    type: ActionTypes.DELETE_ITEM,
    payload: id
});





