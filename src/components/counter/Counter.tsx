import React from 'react';
import { connect } from 'react-redux';
// import { store } from '../../store/config';
// import { push } from 'connected-react-router';
// import { useHistory } from 'react-router-dom';
import { DatePicker, Button } from 'antd';
import _ from 'lodash';
 
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
        this.props.history.push('/info');
        // history.push('/info');
        // store.dispatch(push('/info'));

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