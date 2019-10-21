import React from 'react';
import { Link } from 'react-router-dom';

class InfoDiv extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                Information
                <Link to="/counter">Counter</Link>
            </div>
        )
    }
}

export default InfoDiv;