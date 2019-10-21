import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createRootReducer from '../reducers/RootReducer';

export const history = createBrowserHistory();

// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const _window: any = window;

const persistConfig = {
  key: 'persistStore',
  storage,
}

const rootReducer = createRootReducer(history);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk, routerMiddleware(history)]
const enhancers: any = [];

if (process.env.NODE_ENV === "development") {
    const devToolsExtension = _window.__REDUX_DEVTOOLS_EXTENSION__;
    if (typeof devToolsExtension === "function") {
      enhancers.push(devToolsExtension());
    }
  }


const composedEnhanced = compose(
    applyMiddleware(...middleware),
    // (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose,
    ...enhancers
)

export default function configStore() {
    let store = createStore(
      persistedReducer,
      _window.__INITIAL_STATE__,
      composedEnhanced
    );
    let persistor = persistStore(store);
    return { store, persistor };
}

export const { store, persistor } = configStore();