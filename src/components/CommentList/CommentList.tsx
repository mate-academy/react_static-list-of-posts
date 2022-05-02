import React from 'react';

import './CommentList.scss';

import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <div data-cy="comments-list" className="comments__wrapper">
      <div className="comments__title">
        Comments:
      </div>

      {comments.map(comment => (
        <div className="comments__item comment">
          <CommentInfo
            name={comment.name}
            body={comment.body}
            email={comment.email}
            key={comment.id}
          />
        </div>
      ))}
    </div>
  );
};
