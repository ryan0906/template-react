import React from 'react';

import { Redirect, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import LeftNavigate from '../../components/user/LeftNavigate';
import LabelView from './LabelView';
import TrainView from './TrainView';
import UserProfileView from './UserProfileView';

import NotFoundPage from '../NotFoundPage';

interface UserMainProps {}
interface userMainState {}

class UserMain extends React.Component<UserMainProps, userMainState> {
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <LeftNavigate />
                <Layout.Content>
                    <Switch>
                        <Redirect exact path="/app" to="/app/label" />
                        <Route exact path="/app/profile" component={UserProfileView} />
                        <Route exact path="/app/label" component={LabelView} />
                        <Route exact path="/app/train" component={TrainView} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </Layout.Content>
            </Layout>
        );
    }
}

export default UserMain;