import React from 'react';
import { commentType } from '../../types';

import './Comment.css';

export function Comment({ comment }) {
  return (
    <div>
      <h4 className="comment__name">{comment.name}</h4>
      <p>{comment.body}</p>
      <a href={`mailto:${comment.email}`}>{comment.email}</a>
    </div>
  );
}

Comment.propTypes = {
  comment: commentType.isRequired,
};
