import React from 'react';

import { Layout, Menu, Icon } from 'antd';

import NavigateService from '../../services/NavigateService';

const { Sider } = Layout;

interface LeftNavigateProps {}
interface LeftNavigateState {
    collapsed: boolean;
}

class LeftNavigate extends React.Component<LeftNavigateProps, LeftNavigateState> {
    constructor(props: LeftNavigateProps) {
        super(props);
        this.state = {
            collapsed: true
        }
    }

    onCollapse = () => {
        this.setState({ collapsed: !this.state.collapsed })
    }

    onMenuClick = (event: any) => {
        switch (event.key) {
            case '1':
                NavigateService('/app/profile')
                break;
            case '2':
                NavigateService('/app/label');
                break;
            case '9':
                NavigateService('/app/train');
                break;
        }
    }

    render() {
        return (
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline" onClick={this.onMenuClick}>
                    <Menu.Item key="1">
                        <Icon type="user" />
                        <span>My Profile</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="edit" />
                        <span>Label</span>
                    </Menu.Item>
            {/* <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu> */}
                    <Menu.Item key="9">
                        <Icon type="cluster" />
                        <span>Train</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default LeftNavigate;