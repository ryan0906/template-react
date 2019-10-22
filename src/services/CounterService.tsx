import CounterResources from '../resources/CounterResources';
// import { store } from "../store/config";
import { CounterActions } from '../reducers/CounterReducer';

function getCounter() {
    return (dispatch: any) => {
        return CounterResources.getCount().then(data => {
            console.log("getCounter", data);
            dispatch(CounterActions.getInit(data));
            return data;
        });
    }
}

function increaseCounter(count: Counter) {
    return (dispatch: any) => {
        return CounterResources.increaseCount(count).then(data => {
            dispatch(CounterActions.increase(data));
            return data;
        });
    }
}

function decreaseCounter(count: Counter) {
    return (dispatch: any) => {
        return CounterResources.decreaseCount(count).then(data => {
            dispatch(CounterActions.decrease(data));
            return data;
        });
    }
}
    
export default {
    getCounter,
    increaseCounter,
    decreaseCounter
}