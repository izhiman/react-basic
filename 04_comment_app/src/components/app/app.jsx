import React, {Component} from 'react'
import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/comment-list'

export default class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         comments: [
    //             {
    //                 username: 'Pony Ma',
    //                 content: 'React 很好'
    //             },
    //             {
    //                 username: 'JackMa',
    //                 content: 'React 很简单'
    //             }
    //         ]
    //     }
    // }


    /**
     * 等价在构造函数中为state赋值，这里直接为对象的属性赋值
     */
    state = {
        // comments: [
        //     {
        //         username: 'Pony Ma',
        //         content: 'React 很好'
        //     },
        //     {
        //         username: 'Jack Ma',
        //         content: 'React 很简单'
        //     }
        // ]
        comments: []
    };

    componentDidMount() {
        setTimeout(
            () => {
                const comments = [
                    {
                        username: 'Pony Ma',
                        content: 'React 很好'
                    },
                    {
                        username: 'Jack Ma',
                        content: 'React 很简单'
                    }
                ];
                this.setState({comments})
            }, 1000);
    }

    addComment = (comment) => {
        const {comments} = this.state;
        comments.unshift(comment);
        this.setState({comments});
    };

    deleteComment = (index) => {
        const {comments} = this.state;
        comments.splice(index, 1);
        this.setState({comments});
    };

    render() {
        const {comments} = this.state;
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd addCommentFunc={this.addComment}/>
                    <CommentList comments={comments} deleteCommentFunc={this.deleteComment}/>
                </div>
            </div>
        );
    }
}
