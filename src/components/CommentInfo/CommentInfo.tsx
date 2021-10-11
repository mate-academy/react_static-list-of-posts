import React from 'react';

import './CommentInfo.scss';
import { CommentTypes } from '../../types/CommentTypes';

type Props = {
  comments: CommentTypes[]
};

export const CommentInfo: React.FC<Props> = ({ comments }) => (
  <>
    <h3 className="comments">Comments:</h3>
    {(comments.length > 0) ? (
      <ul className="comments__list">
        {comments.map(comment => (
          <li key={comment.id} className="comments__item comment">
            <span className="comment__name">{comment.name}</span>
            <span className="comment__email">
              (
              {comment.email}
              )
            </span>
            <p className="comment__text">{comment.body}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>No comments</p>
    )}
  </>
);
