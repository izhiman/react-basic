import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import About from '../views/about'
import Home from '../views/home'
import INavLink from './i-navlink'

export default class App extends Component {
    render() {
        return (
            <div>
                {/*顶部*/}
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header">
                            <h2>React Router Demo</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/*导航路由链接*/}
                            <INavLink className="list-group-item" to='/about'>About</INavLink>
                            <INavLink className="list-group-item" to='/home'>Home</INavLink>
                        </div>
                    </div>

                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/*可切换的路由组件*/}
                                <Switch>
                                    <Route path='/about' component={About}/>
                                    <Route path='/home' component={Home}/>
                                    <Redirect to='/about'/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
