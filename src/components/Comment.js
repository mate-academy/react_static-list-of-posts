import React from 'react';

import './comment.scss';


const Comment = ( {comment} ) => (
  <div className="comment">
    <p>Comment ID:{comment.id}</p>
    <p>
      {comment.body}
    </p>
    <div className="comment__author">
      <span className="comment__author-name">
        Name: {comment.name}
      </span>
      <span className="comment__author-email">
        Email: {comment.email}
      </span>
    </div>
    <hr/>
  </div>
)

export default Comment;
