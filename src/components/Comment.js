import React from 'react';
import './Comment.css'

function Comment(props) {
    const {body, name, email} = props;
    return (
        <li>
            <div className="comment_wrapper">
                {body}
            </div>
            <div className="comment_author">
               {name}{email}
            </div>
        </li>
    );
}

export default Comment;
