import React from 'react';
import { CommentInfo } from './CommentInfo';
import { Comment } from '../types/CommentsTypes';

import './CommentList.scss';

type Props = {
  allComments: Comment,
};

export const CommentList: React.FC<Props> = ({ allComments }) => (
  <>
    <ul data-cy="comments-list">
      <li data-cy="comments-list-li" className="comments__list__li">
        <CommentInfo {...allComments} />
      </li>
    </ul>
  </>

);
