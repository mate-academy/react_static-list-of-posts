import React from 'react';

import { Comment } from '../../types/comments';
import './CommentsList.scss';

import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comment[]
};

export const CommentsList: React.FC<Props> = ({ comments = [] }) => {
  return (
    <ul className="comments__list" data-cy="comments-list">
      {comments.map(comment => (
        <li className="comments__item" key={comment.id}>
          <CommentInfo
            name={comment.name}
            body={comment.body}
            email={comment.email}
          />
        </li>
      ))}
    </ul>
  );
};
