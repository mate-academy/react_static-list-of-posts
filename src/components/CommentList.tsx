import React from 'react';
import { CommentInfo } from './CommentInfo';
import { Comment } from '../types/CommentsTypes';

import './CommentList.scss';

type Props = {
  allComments: Comment[],
};

export const CommentList: React.FC<Props> = ({ allComments = [] }) => (

  <ul data-cy="comments-list">
    {allComments.map(comment => (
      <li key={comment.id} className="comments__list__li">
        <CommentInfo {...comment} />
      </li>
    ))}
  </ul>

);
