/* eslint-disable react/prop-types */
import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments }) => (
  <div className="comment_list">
    {comments.map(comment => (
      <Comment comment={comment} />
    ))
    }
  </div>
);

export default CommentList;
