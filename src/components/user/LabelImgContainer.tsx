import React from 'react';

import { Layout } from 'antd';

interface LabelImgContainerProps {}
interface LabelImgContainerState {}

class LabelImgContainer extends React.Component<LabelImgContainerProps, LabelImgContainerState> {
    render() {
        return (
            <Layout.Content>
                <Layout className="imgcontainer">
                    <Layout.Content className="imgcontainer-img">Img Here</Layout.Content>
                    <Layout.Footer className="imgcontainer-footer">Footer Here</Layout.Footer>
                </Layout>
            </Layout.Content>
        );
    }
}

export default LabelImgContainer;