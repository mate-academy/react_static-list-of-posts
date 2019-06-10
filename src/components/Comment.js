import React from 'react';
import './comment.css';

function Comment(props) {
    return (
        <div className="comment">
            <p className="user_info">{props.comment.name}, {props.comment.email}</p>
            <p>{props.comment.body}</p>
        </div>
    );
}

export default Comment;
