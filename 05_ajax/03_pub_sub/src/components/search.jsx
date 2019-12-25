import React, {Component} from 'react'
import PubSub from 'pubsub-js'

export default class Search extends Component {


    search = () => {
        const searchKeyWord = this.searchKeyWord.value;
        // 发布消息
        PubSub.publish("searchKeyWord", searchKeyWord);
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
