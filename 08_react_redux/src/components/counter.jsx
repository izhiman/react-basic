import React, {Component} from 'react'
import PropTypes from 'prop-types'

//不使用redux API的组件称为UI组件
// class App extends Component {

export default class Counter extends Component {

    static propTypes = {
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        asyncInc: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired
    };

    increment = () => {
        const delta = parseInt(this.selectTag.value);
        this.props.increment(delta);
    };

    decrement = () => {
        const delta = parseInt(this.selectTag.value);
        this.props.decrement(delta);
    };

    incrOnOdd = () => {
        const delta = parseInt(this.selectTag.value);
        let {count} = this.props;
        if (count % 2 === 1) {
            this.props.increment(delta);
        }
    };
    asyncIncr = () => {
        const delta = parseInt(this.selectTag.value);
        this.props.asyncInc(delta);
        // const tid = setTimeout(() => {
        //     this.increment();
        //     clearTimeout(tid);
        // }, 1000);
    };

    render() {
        const {count} = this.props;
        return (
            <div>
                <p>click {count} times</p>
                <div>
                    <select ref={selectTag => this.selectTag = selectTag}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                    </select>
                    &nbsp; &nbsp;
                    <button onClick={this.increment}>+</button>
                    &nbsp; &nbsp;
                    <button onClick={this.decrement}>-</button>
                    &nbsp; &nbsp;
                    <button onClick={this.incrOnOdd}>incr if odd</button>
                    &nbsp; &nbsp;
                    <button onClick={this.asyncIncr}>incr async</button>
                </div>
            </div>
        )
    }
}

// export default connect(
//     state => ({count: state}),
//     {increment, decrement}
// )(App);
