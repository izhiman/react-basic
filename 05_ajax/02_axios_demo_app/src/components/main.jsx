import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'


export default class Main extends Component {
    state = {
        init: true,
        loading: false,
        users: [],
        errmsg: null
    };

    static propTypes = {
        searchKeyWord: PropTypes.string.isRequired
    };

    componentWillReceiveProps(newProps) {
        const {searchKeyWord} = newProps;
        // 更新状态
        this.setState({init: false, loading: true});
        const url = `https://api.github.com/search/users?q=${searchKeyWord}`;
        axios.get(url)
            .then(response => {
                const result = response.data;
                // 更新状态
                const users = result.items.map(item => ({
                    name: item.login,
                    url: item.html_url,
                    imgurl: item.avatar_url
                }));
                this.setState({loading: false, users})
            }).catch(err => {
            this.setState({loading: false, errmsg: err.message})
        })
    }

    render() {
        const {init, loading, users, errmsg} = this.state;
        if (init) {
            return <h2>请输入关键字进行搜索</h2>
        } else if (loading) {
            return <h2>正在请求中。。。</h2>
        } else if (errmsg) {
            return <h2>请求出错：{errmsg}</h2>
        } else {
            return (
                <div className="row">
                    {
                        users.map((user, index) => (
                            <div className="card" key={index}>
                                <a href={user.url} target="_blank">
                                    <img src={user.imgurl} style={{width: 100}}/>
                                </a>
                                <p className="card-text">{user.name}</p>
                            </div>))
                    }
                </div>)
        }
    }
}
