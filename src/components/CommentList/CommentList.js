import React from 'react';

import { TypeComments } from '../../types';

import { Comment } from '../Comment/Comment';

export function CommentList({ comments }) {
  return (
    <div className="comment-list">
      {comments.map(comment => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  );
}

CommentList.propTypes = TypeComments.isRequired;
