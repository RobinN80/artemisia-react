import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import { Movies, updateCartReducer} from './reducer';
import thunk from 'redux-thunk';

const allReducers = combineReducers({
    movies: Movies,
    shoppingCartTickets: updateCartReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const ConfigureStore = () => {
    const store = createStore(
        allReducers, 
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};