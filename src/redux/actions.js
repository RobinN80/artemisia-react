import * as ActionTypes from './actionTypes';

export const addItemtoCart = (number) => {
    return {
        type: ActionTypes.ADD_ITEM,
        payload: number
    }
};

 export const deleteItemfromCart = () => ({
    type: ActionTypes.DELETE_ITEM
});




