import React from 'react';
import { Comment } from '../../interfaces/interfaces';
import { CommentInfo } from '../CommentInfo/CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Comment[] | null;
};

export const CommentList: React.FC<Props> = ({ comments = [] }) => (
  <>
    <ul>
      {comments
        && comments.map(comment => (
          <li key={comment.id}>
            <CommentInfo {...comment} />
          </li>
        ))}
    </ul>
  </>
);
