import MOVIES from '../shared/movies';
import * as ActionTypes from './actionTypes';
import { Movies } from './reducer';

export const addItemToCart = (title, numRegular, numSenStud, numMembers) => {
    return {
        type: ActionTypes.ADD_ITEM,
        payload: {
            title, 
            numRegular,
            numSenStud,
            numMembers
        }
    }
};

 export const deleteItemfromCart = (title, numRegular, numSenStud, numMembers) => ({
    type: ActionTypes.DELETE_ITEM,
    payload: {
        title, 
        numRegular,
        numSenStud,
        numMembers
    }
});





