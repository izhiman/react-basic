import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Search extends Component {
    static propTypes = {
        onSearch: PropTypes.func.isRequired
    };

    search = () => {
        this.props.onSearch(this.searchKeyWord.value);
    };

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search"
                           ref={keyword => this.searchKeyWord = keyword}/>
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
