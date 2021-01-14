import React from 'react';
import { Comment } from '../Comment';
import './CommentList.scss';

export function CommentList(...comments) {
  const commentsKeys = Object.values(comments[0]);

  return (
    <ul className="comment-list">
      {commentsKeys.map(comment => (
        <li
          key={comment.id}
          className="comment-list__comment"
        >
          <Comment {...comment} />
        </li>
      ))}
    </ul>
  );
}
