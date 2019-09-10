import React from 'react';
import './Comment.css';

const Comment = ({ data }) => (
  <div className="comment">
    <div>{data.name}</div>
    <div>{data.email}</div>
    <div>{data.body}</div>
  </div>
);

export default Comment;
