import {MOVIES} from '../shared/movies';
import * as ActionTypes from './actionTypes';

export const Movies = (state = MOVIES, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


export const updateCartReducer = (state = {tickets: []}, action) => {
    switch (action.type){
        case ActionTypes.ADD_TICKETS:
            console.log("action payload", action.payload);
            return {
                ...state, tickets: [...state.tickets, action.payload]
            };
        case ActionTypes.DELETE_ITEM:
            return  {...state, tickets: [state.tickets.filter(ticket => ticket.title !== action.payload.title)]};
        default:
            return state;
    };
};