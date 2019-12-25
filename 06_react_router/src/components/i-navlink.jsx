import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

//  如何包装现有组件
export default class INavLink extends Component {
    render() {
        return (
            // {...this.props将外部传递给INavLink的所有属性传递给NavLink标签
            <NavLink {...this.props} activeClassName='activeClass'/>
        )
    }
}
