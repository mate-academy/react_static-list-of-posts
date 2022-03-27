import React from 'react';
import { CommentInfo } from './CommentInfo';
import { Comment } from '../types/CommentsTypes';

import './CommentList.scss';

type Props = {
  all: Comment,
};

export const CommentList: React.FC<Props> = ({ all }) => (
  <>
    <ul data-cy="comments-list">
      <li data-cy="comments-list-li">
        <CommentInfo {...all} />
      </li>
    </ul>
  </>

);
