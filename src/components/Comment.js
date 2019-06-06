import React from 'react';
import './Comment.css';

function Comment(props) {

    return (
        <div className='comment-item'>
            <div className='name'>{props.name}</div>
            <div className='email'>{props.email}</div>
            <div className='body'>{props.body}</div>
        </div>
    );
}

export default Comment;