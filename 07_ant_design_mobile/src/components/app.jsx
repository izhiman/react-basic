import React, {Component} from 'react'
import {Button, Toast} from 'antd-mobile'

export default class App extends Component {
    handleClick = () => {
        Toast.info("点点点点点点！", 1);
    };
    render() {
        return (
            <Button type='primary' onClick={this.handleClick}>Start</Button>
        )
    }
}
