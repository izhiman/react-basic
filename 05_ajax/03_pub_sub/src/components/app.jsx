import React, {Component} from 'react'

import Main from './main'
import Search from './search'

export default class App extends Component {
    // Search组件发布消息，Main组件订阅消息
    render() {
        return (
            <div className="container">
                <Search />
                <Main/>
            </div>
        )
    }
}
