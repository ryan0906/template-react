import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Loadable from './Loadable';

const CounterComp = Loadable(() =>
    import(/* webpackChunkName: 'Counter' */ '../components/counter/Counter')
);

const InfoDivView = Loadable(() =>
    import(/* webpackChunkName: 'InfoDiv' */ '../components/info/InfoDiv')
);

const TargetIdView = Loadable(() =>
    import(/* webpackChunkName: 'TargetIdView' */ '../containers/TargetIdView')
);

const NotFoundView = Loadable(() =>
    import(/* webpackChunkName: 'NotFoundView' */ '../containers/NotFoundView')
);

const AppRoute = () => {
    return (
        <Switch>
            <Route exact path="/counter" component={CounterComp} />
            <Route exact path="/info" component={InfoDivView} />
            <Route exact path="/target/:id" component={TargetIdView} />
            {/* <Redirect exact path="/" to="/info" /> */}
            <Route component={NotFoundView} />
        </Switch>
    )
}

export default AppRoute;