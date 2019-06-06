import React from 'react';
import './Post.css';
import User from './User';
import CommentsList from './CommentList';


function Post(props) {

    return (
        <div className='post'>
            <User user = {props.user}/>
            <div className='post-body'>
                <div className='title'>{props.title}</div>
                <div className='body'>{props.body}</div>
            </div>
            <CommentsList postId = {props.postId}/>
        </div>
    );
}

export default Post;