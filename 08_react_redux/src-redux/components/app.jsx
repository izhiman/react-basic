import React, {Component} from 'react'
import PropTypes from 'prop-types'

import * as actions from '../redux/actions'

export default class App extends Component {

    static propTypes = {
        store: PropTypes.object.isRequired
    };

    increment = () => {
        const delta = parseInt(this.selectTag.value);
        this.props.store.dispatch(actions.increment(delta));
    };

    decrement = () => {
        const delta = parseInt(this.selectTag.value);
        this.props.store.dispatch(actions.decrement(delta));
    };

    incrOnOdd = () => {
        const delta = parseInt(this.selectTag.value);
        let count = this.props.store.getState();
        if (count % 2 === 1) {
            this.props.store.dispatch(actions.increment(delta));
        }
    };
    asyncIncr = () => {
        const tid = setTimeout(() => {
            this.increment();
            clearTimeout(tid);
        }, 1000);
    };

    render() {
        const count = this.props.store.getState();
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
