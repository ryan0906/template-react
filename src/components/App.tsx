import React from 'react';
import { Provider } from 'react-redux';

import configStore, { history } from '../store/config';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Router } from 'react-router-dom'; 
// import { ConnectedRouter } from 'connected-react-router';
import AppRoute from '../routing/AppRoute';
 
import '../styles/index.less';
 
const { store, persistor } = configStore();
 
interface AppProps {}
interface AppState {}
 
class App extends React.Component<AppProps, AppState> {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router history={history}>
                        <AppRoute />
                    </Router>
                </PersistGate>
            </Provider>
        );
    }
}
 
export default App;