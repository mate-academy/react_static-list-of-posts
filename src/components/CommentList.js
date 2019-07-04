import React from 'react';

import './comment-list.scss';
import Comment from './Comment';

const CommentList = props => (
  props.comment.map(comment => (
    <div className="comment-list" key={comment.id}>
      <Comment comment={comment} />
    </div>
  ))
);

export default CommentList;
