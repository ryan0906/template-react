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

const UserMain = Loadable(() =>
    import(/* webpackChunkName: 'TargetIdView' */ '../containers/user/UserMain')
);

const NotFoundPage = Loadable(() =>
    import(/* webpackChunkName: 'NotFoundPage' */ '../containers/NotFoundPage')
);

const AppRoute = () => {
    return (
        <Switch>
            <Route exact path="/counter" component={CounterComp} />
            <Route exact path="/info" component={InfoDivView} />
            <Route exact path="/target/:id" component={TargetIdView} />
            
            {/* TODO: auth route */}
            <Route path="/app" component={UserMain} />
            <Route component={NotFoundPage} />
        </Switch>
    )
}

export default AppRoute;