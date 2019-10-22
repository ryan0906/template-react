import React from 'react';
import { connect } from 'react-redux';
// import { store } from '../../store/config';
// import { push } from 'connected-react-router';
// import { useHistory } from 'react-router-dom';
import _ from 'lodash';
 
// import { getInit, increase, decrease } from '../../reducers/Actions';
import CounterService from '../../services/CounterService';
 
interface CounterProps {
    count: number;
    increase: any;
    decrease: any;
    getInit: any;
    history: any
}
interface CounterState {
    count: number;
}
 
const mapStateToProps = (state: any) => ({
    count: _.get(state, "counter.count", {})
});
 
// const mapDispatchToProps = {
//     getInit,
//     increase,
//     decrease
// };
const mapDispatchToProps = (dispatch: any) => {
    return {
        getInit: () => {
            dispatch(CounterService.getCounter());
        },
        increase: (count: Counter) => {
            dispatch(CounterService.increaseCounter(count));
        },
        decrease: (count: Counter) => {
            dispatch(CounterService.decreaseCounter(count));
        }
    }
}
 
class CounterComp extends React.Component<CounterProps, CounterState> {
    
    constructor(props: CounterProps) {
        super(props);
        console.log('props: ', props);
        this.state = {
            count: this.props.count
        }
    }

    componentDidMount() {
        // CounterService.getCounter().then(data => {
        //     this.setState({ count: data.count });
        // });
    }
 
    increaseOnClick = () => {
        this.props.increase(this.props).then((data: Counter) => {
            this.setState({
                count: data.count
            })
        });
    }
 
    decreaseOnClick = () => {
        this.props.decrease(this.state).then((data: Counter) => {
            this.setState({
                count: data.count
            })
        });
    }

    getCurr = () => {
        this.props.getInit();
    }

    navigate = () => {
        this.props.history.push('/info');
        // history.push('/info');
        // store.dispatch(push('/info'));

    }
 
    render() {
        return (
            <div>
                <button type='button' onClick={this.decreaseOnClick}>-</button>
                <span>Props: {this.props.count}</span>
                <span>State: {this.state.count}</span>
                <button type='button' onClick={this.increaseOnClick}>+</button>
                <button type='button' onClick={this.getCurr}>Current</button>
                <button type='button' onClick={this.navigate}>Info</button>
            </div>
        )
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CounterComp);