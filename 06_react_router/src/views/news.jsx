import React, {Component} from 'react'

export default class News extends Component {
    state = {
        newList: [
            'news01',
            'news02',
            'news03'
        ]
    };

    render() {
        return (
           <ul>
               {this.state.newList.map((news,index) => <li key={index}>{news}</li>)}
           </ul>
        )
    }
}
