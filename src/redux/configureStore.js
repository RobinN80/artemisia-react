import {combineReducers, createStore} from 'redux';
import { Movies, updateCartReducer} from './reducer';

const allReducers = combineReducers({
    movies: Movies,
    shoppingCart: updateCartReducer
})

export const ConfigureStore = () => {
    const store = createStore(
        allReducers, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
};