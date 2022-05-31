import React from 'react';
import './CommentList.scss';

import { Comment } from '../../types';
import { CommentInfo } from '../CommentInfo';

interface Props {
  comments: Comment[];
}

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    <ul>
      {comments.map((comment) => (
        <li>
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  </>
);
