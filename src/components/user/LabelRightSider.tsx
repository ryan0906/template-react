import React from 'react';

import { Layout, Tabs, Switch, Row, Col, Slider } from 'antd';

const { Sider } = Layout;
const { TabPane } = Tabs;

interface LabelRigthSiderProps {}
interface LabelRigthSiderState {}

class LabelRigthSider extends React.Component<LabelRigthSiderProps, LabelRigthSiderState> {
    tabChange(key: string) {
        console.log(key);
    }
    
    render() {
        return (
            <Sider className="rightsider" width="300px">
                <Tabs onChange={this.tabChange} className="rightsider-tabs" type="line">
                    <TabPane tab="Tools" key="1">
                        <div>
                            Auto <Switch />
                            Manual <Switch />
                        </div>
                        <div>
                            <Row style={{margin: "10px"}}>
                                <Col span={8}>
                                    Dilation
                                </Col>
                                <Col span={16}>
                                    <Slider
                                        min={1}
                                        max={20}
                                        style={{margin: "5px", width: "90%"}}
                                    />
                                </Col>
                            </Row>
                            <Row style={{margin: "10px"}}>
                                <Col span={8}>
                                    Tolerance
                                </Col>
                                <Col span={16}>
                                    <Slider
                                        min={1}
                                        max={20}
                                        style={{margin: "5px", width: "90%"}}
                                    />
                                </Col>
                            </Row>
                        </div>
                    </TabPane>
                    <TabPane tab="Label" key="2">
                        Content 2
                    </TabPane>
                    <TabPane tab="Image" key="3">
                        Content 3
                    </TabPane>
                </Tabs>
            </Sider>
        );
    }
}

export default LabelRigthSider;