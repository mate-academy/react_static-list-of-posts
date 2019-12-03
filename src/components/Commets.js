/* eslint-disable react/prop-types */
import React from 'react';

const CommentsList = props => (
  <div className="post__comments">
    {props.postComments.map(item => (
      <Comment
        commentAuthor={item.name}
        commentEmail={item.email}
        commentBody={item.body}
      />
    ))}
  </div>
);

const Comment = props => (
  <div className="commet">
    <h3 className="comment__author">
      {props.commentAuthor}
    </h3>
    <span className="comment__email">
      {props.commentEmail}
    </span>
    <p className="comment__text">
      {props.commentBody}
    </p>
  </div>
);

export default CommentsList;
