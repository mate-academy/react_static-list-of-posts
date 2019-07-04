/* eslint-disable react/prop-types */
import React from 'react';

const Comment = ({ comment }) => (
  <div className="comment">
    <div className="title">
      <p>{comment.email}</p>
      <p>{comment.name}</p>
    </div>
    <p>{comment.body}</p>
  </div>
);

export default Comment;
