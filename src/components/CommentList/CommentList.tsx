import React from 'react';

import { Comment } from '../../types/types';

import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <div className="container">
      <ul className="commentsList" data-cy="comments-list">
        {comments.map(comment => (
          <li className="commentsList__item" key={comment.id}>
            <CommentInfo comment={comment} />
          </li>
        ))}
      </ul>
    </div>
  );
};
