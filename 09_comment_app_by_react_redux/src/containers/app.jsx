import React, {Component} from 'react'
import CommentAdd from '../components/comment-add/comment-add'
import CommentList from '../components/comment-list/comment-list'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addComment, deleteComment, asyncGetComments} from '../redux/actions'

class App extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired,
        addComment: PropTypes.func.isRequired,
        deleteComment: PropTypes.func.isRequired,
        asyncGetComments: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.asyncGetComments();
    };

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

    // addComment = (comment) => {
    //     const {comments} = this.state;
    //     comments.unshift(comment);
    //     this.setState({comments});
    // };
    //
    // deleteComment = (index) => {
    //     const {comments} = this.state;
    //     comments.splice(index, 1);
    //     this.setState({comments});
    // };

    render() {
        const {comments, addComment, deleteComment} = this.props;
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
                    <CommentAdd addCommentFunc={addComment}/>
                    <CommentList comments={comments} deleteCommentFunc={deleteComment}/>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({comments: state}), // state就是comments数组
    {addComment, deleteComment, asyncGetComments}
)(App);
