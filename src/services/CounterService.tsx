import CounterResources from '../resources/CounterResources';
import { store } from "../store/config";
import { CounterActions } from '../reducers/CounterReducer';

function getCounter() {
    return CounterResources.getCount().then(data => {
        console.log("getCounter", data);
        store.dispatch(CounterActions.getInit(data));
        return data;
    });
}

function increaseCounter(count: Counter) {
    return CounterResources.increaseCount(count).then(data => {
        store.dispatch(CounterActions.increase(data));
        return data;
    });
}

function decreaseCounter(count: Counter) {
    return CounterResources.decreaseCount(count).then(data => {
        store.dispatch(CounterActions.decrease(data));
        return data;
    });
}
    
export default {
    getCounter,
    increaseCounter,
    decreaseCounter
}