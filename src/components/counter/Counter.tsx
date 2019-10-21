import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
 
import { getInit, increase, decrease } from '../../reducers/Actions';
import CounterService from '../../services/CounterService';
// import CounterResources from '../../resources/CounterResources';
 
interface CounterProps {
    count: number;
    increase: any;
    decrease: any;
    getInit: any
}
interface CounterState {
    count: number;
}
 
const mapStateToProps = (state: any) => ({
    count: _.get(state, "counter.count", {})
});
 
const mapDispatchToProps = {
    getInit,
    increase,
    decrease
};
 
class Counter extends React.Component<CounterProps, CounterState> {
    constructor(props: CounterProps) {
        super(props);
        console.log('props: ', props);
        this.state = {
            count: this.props.count
        }
    }

    componentDidMount() {
        // debugger;
        // CounterService.getCounter().then(data => {
        //     console.log("getInit:");
        //     console.log(data);
        //     this.setState({ count: data.count });
        // });
        // console.log("DidMount:");
        // console.log(store.getState());
    }
 
    increaseOnClick = () => {
        // this.props.inc(this.state);
        CounterService.increaseCounter(this.state).then(data => {
            this.setState({
                count: data.count
            })
        });
        // this.props.increase();
        // this.setState({
        //     count: this.state.count + 1
        // })
    }
 
    decreaseOnClick = () => {
        CounterService.decreaseCounter(this.state).then(data => {
            this.setState({
                count: data.count
            })
        });
        // this.props.decrease();
        // this.setState({
        //     count: this.state.count - 1
        // })
    }

    getCurr = () => {
        CounterService.getCounter().then(data => {
            this.setState({
                count: data.count
            })
        })
    }
 
    render() {
        return (
            <div>
                <button type='button' onClick={this.decreaseOnClick}>-</button>
                <span>Props: {this.props.count}</span>
                <span>State: {this.state.count}</span>
                <button type='button' onClick={this.increaseOnClick}>+</button>
                <button type='button' onClick={this.getCurr}>Current</button>
            </div>
        )
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Counter);