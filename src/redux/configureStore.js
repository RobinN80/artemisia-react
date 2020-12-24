import {combineReducers, createStore} from 'redux';
import { Movies, updateCartReducer} from './reducer';

const allReducers = combineReducers({
    movies: Movies,
    cart: updateCartReducer
})

export const ConfigureStore = () => {
    const store = createStore(allReducers);
    return store;
};