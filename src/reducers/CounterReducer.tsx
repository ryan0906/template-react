import { createAction, ReducerBuilder } from 'redux-ts-simple';
// import { createAction, handleActions } from 'redux-actions';

const initState = {
    count: 0
}

export const CounterActions = {
    getInit: createAction<Counter>('GETINIT'),
    increase: createAction<Counter>('INCREASE'),
    decrease: createAction<Counter>('DECREASE')
}

// const counterReducer = handleActions(
//     {
//         [CounterActions.getInit as any]: (state, action) => {
//             return {
//                 ...state,
//                 count: action.payload.count
//             }
//         },
//         [CounterActions.increase as any]: (state, action) => {
//             return {
//                 ...state,
//                 count: action.payload.count
//             }
//         },
//         [CounterActions.decrease as any]: (state, action) => {
//             return {
//                 ...state,
//                 count: action.payload.count
//             }
//         }
//     },
//     initState
// )

const counterReducer = new ReducerBuilder(initState)
    .on(CounterActions.getInit, (state: any, action) => {
        console.log(state, action);
        return {
            ...state,
            count: action.payload.count
        }
    })
    .on(CounterActions.increase, (state: any, action) => {
        return {
            ...state,
            count: action.payload.count
        }
    })
    .on(CounterActions.decrease, (state: any, action) => {
        return {
            ...state,
            count: action.payload.count
        }
    })
    .build();
 
// const counterReducer = (state=initState, action) => {
//     console.log('reducer', state, action);
 
//     switch(action.type) {
//         case 'GETINIT':
//             return
//                 // return CounterResources.getCount().then(data => {
//                 //     console.log("getCount: ", data);
//                 //     return data;
//                 // });
//         case 'INCREASE':
//             return {
//                 count: state.count + 1
//             };
//         case 'DECREASE':
//             return {
//                 count: state.count - 1
//             };
//         default:
//             return state;
//     }
// }
 
export default counterReducer;
