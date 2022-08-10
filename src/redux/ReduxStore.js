import { todoReducer } from './TodoReducer';
import { createStore, combineReducers } from 'redux'

let Reducers = combineReducers({
    todo: todoReducer
});

let store = createStore(Reducers);

window.store = store;

export default store;