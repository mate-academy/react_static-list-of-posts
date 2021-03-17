import React from 'react';
import { CommentType } from '../../types';

export function Comment({ comment }) {
  return (
    <div>
      <h3 className="comment__name">{comment.name}</h3>
      <p>{comment.body}</p>
      <a href={`mailto:${comment.email}`}>{comment.email}</a>
    </div>
  );
}

Comment.propTypes = {
  comment: CommentType.isRequired,
};
