import React from 'react';
import { Comment } from '../types/Comment';
import { CommentInfo } from './CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <ul data-cy="comments-list" className="comment__list">
      {comments.map(comment => {
        return (
          <li className="comment__item" key={comment.id}>
            <CommentInfo
              name={comment.name}
              body={comment.body}
              email={comment.email}
            />
          </li>
        );
      })}
    </ul>
  );
};
