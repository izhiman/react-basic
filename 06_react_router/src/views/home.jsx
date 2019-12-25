import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import INavLink from '../components/i-navlink'
import News from './news'
import Message from './message'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>HOME</h3>
                <div>
                    <ul className='nav nav-tabs'>
                        <li>
                            <INavLink to='/home/news'>news</INavLink>
                        </li>
                        <li>
                            <INavLink to='/home/message'>message</INavLink>
                        </li>
                    </ul>
                    <div>
                        <Switch>
                            <Route path='/home/news' component={News}/>
                            <Route path='/home/message' component={Message}/>
                            <Redirect to='/home/message'/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}
