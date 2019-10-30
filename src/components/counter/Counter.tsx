import React from 'react';
import { connect } from 'react-redux';
import { DatePicker, Button } from 'antd';
import _ from 'lodash';

import NavigateService from '../../services/NavigateService';
import CounterService from '../../services/CounterService';
 
interface CounterProps {
    count: number;
    increase: any;
    decrease: any;
    getInit: any;
}
interface CounterState {
    count: number;
}
 
const mapStateToProps = (state: any) => ({
    count: _.get(state, "counter.count", {})
});

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
        this.state = {
            count: this.props.count
        }
    }

    componentDidMount() {
        // CounterService.getCounter().then(data => {
        //     this.setState({ count: data.count });
        // });
    }

    componentDidUpdate() {
        console.log("in");
        if (this.props.count != this.state.count) {
            console.log(this.props.count, this.state.count);
            this.setState({
                count: this.props.count
            });
        }
    }
 
    increaseOnClick = () => {
        this.props.increase(this.state);
    }
 
    decreaseOnClick = () => {
        this.props.decrease(this.state);
    }

    getCurr = () => {
        this.props.getInit();
    }

    navigate = () => {
        NavigateService('/info');
    }
 
    render() {
        return (
            <div>
                <DatePicker></DatePicker>
                <Button type='primary'>Primary</Button>
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