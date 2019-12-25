import React, {Component} from 'react'

import Main from './main'
import Search from './search'

export default class App extends Component {
    state = {
        searchKeyWord: ''
    };

    setSearchKeyWord = (searchKeyWord) => {
        this.setState({searchKeyWord});
    };


    render() {
        return (
            <div className="container">
                <Search onSearch={this.setSearchKeyWord}/>
                <Main searchKeyWord={this.state.searchKeyWord}/>
            </div>
        )
    }
}
