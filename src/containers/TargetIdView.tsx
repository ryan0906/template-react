import React from 'react';

class TargetIdView extends React.Component<{}, {}> {
    render() { 
        return (
            <span>{this.props.match.params.id}</span>
        );
    }
}

export default TargetIdView;