import React from 'react';

import { Layout } from 'antd';

import LabelImgContainer from '../../components/user/LabelImgContainer';
import LabelRigthSider from '../../components/user/LabelRightSider';
import '../../styles/user/labelview.less';

interface LabelViewProps {}
interface LabelViewState {}

class LabelView extends React.Component<LabelViewProps, LabelViewState> {
    render() {
        return (
            <Layout>
                <LabelImgContainer />
                <LabelRigthSider />
            </Layout>
        );
    }
}

export default LabelView;