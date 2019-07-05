import React from 'react';
import './comment.scss';

const Comment = ({ commentData }) => (
  <div className="comment">
    <p>Comment ID:{commentData.id}</p>
    <p>
      {commentData.body}
    </p>
    <div className="comment__author">
      <span className="comment__author-name">
        Name: {commentData.name}
      </span>
      <span className="comment__author-email">
        Email: {commentData.email}
      </span>
    </div>
    <hr />
  </div>
)

export default Comment;
