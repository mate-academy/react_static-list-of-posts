import React from 'react';
import './CommentList.css';
import Comment from './Comment'
import {comments} from '../comments';

function CommentList(props) {
    const commentsForPost = comments.filter(item => {
        return item.postId === props.postId;
    });
    const commentsForRender = commentsForPost.map(item => {
        return <Comment name = {item.name}
                        email = {item.email}
                        body = {item.body}
                        key = {item.id}
        />
    });

    return (
        <div className='comments-list'>
            {commentsForRender}
        </div>
    );
}

export default CommentList;