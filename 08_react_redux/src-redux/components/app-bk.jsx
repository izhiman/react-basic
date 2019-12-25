import React, {Component} from 'react'

export default class App extends Component {

    state = {
        count: 0
    };

    increment = () => {
        const delta = parseInt(this.selectTag.value);
        let {count} = this.state;
        count += delta;
        this.setState({count});
    };

    decrement = () => {
        const delta = parseInt(this.selectTag.value);
        let {count} = this.state;
        count -= delta;
        this.setState({count});
    };

    incrOnOdd = () => {
        const delta = parseInt(this.selectTag.value);
        let {count} = this.state;
        if (count % 2 === 1) {
            count += delta;
            this.setState({count});
        }
    };
    asyncIncr = () => {
        const tid = setTimeout(() => {
            this.increment();
            clearTimeout(tid);
        }, 1000);
    };

    render() {
        const {count} = this.state;
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
