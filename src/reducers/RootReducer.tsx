import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import counterReducer from './CounterReducer'

const createRootReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    counter: counterReducer
});

export default createRootReducer;