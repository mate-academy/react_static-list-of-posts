import React from 'react';
import { Comment } from '../../types/comments';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    <ul>
      {comments.map(comment => (
        <li>
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  </>
);
