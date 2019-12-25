import React, {Component} from 'react'
import MessageDetail from './message-detail'
import {Route} from 'react-router-dom'
import INavLink from '../components/i-navlink'


export default class Message extends Component {
    state = {
        messages: []
    };

    componentDidMount() {
        const tid = setTimeout(() => {
            const messages = [
                {id: 1, title: 'message01'},
                {id: 3, title: 'message03'},
                {id: 5, title: 'message05'}
            ];
            this.setState({messages});
            clearTimeout(tid);
        }, 1000);
    }

    pushAccess = (id) => {
        this.props.history.push(`/home/message/messagesDetail/${id}`);
    };

    replaceAccess = (id) => {
        this.props.history.replace(`/home/message/messagesDetail/${id}`);
    };

    back = () => {
        this.props.history.goBack();
    };
    forward = () => {
        this.props.history.goForward();
    };


    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messages.map((m, index) =>
                            <li key={index}>
                                <INavLink to={`/home/message/messagesDetail/${m.id}`}>{m.title}</INavLink>
                                &nbsp;&nbsp;
                                <button onClick={() => this.pushAccess(m.id)}>push跳转</button>
                                &nbsp;&nbsp;
                                <button onClick={() => this.replaceAccess(m.id)}>replace跳转</button>
                            </li>)
                    }
                </ul>
                <p>
                    <button onClick={this.back}>回退</button>
                    <button onClick={this.forward}>前进</button>
                </p>
                <Route path='/home/message/messagesDetail/:id' component={MessageDetail}/>
            </div>

        )
    }
}
