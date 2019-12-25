import React, {Component} from 'react'
import PropTypes from 'prop-types'

import CommentItem from '../comment-item/comment-item'
import './commentList.css'

export default class CommentList extends Component {
    //不加static为组件对象添加属性 加了就是为组件类添加属性
    static propTypes = {
        comments: PropTypes.array.isRequired,
        deleteCommentFunc: PropTypes.func.isRequired
    };

    render() {
        const {comments, deleteCommentFunc} = this.props;
        const display = comments.length === 0 ? 'block' : 'none';
        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {comments.map((comment, index) => <CommentItem comment={comment} key={index}
                                                                   deleteCommentFunc={deleteCommentFunc}
                                                                   index={index}/>)}
                </ul>
            </div>
        )
    }
}
