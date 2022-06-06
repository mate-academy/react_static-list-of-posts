import React from 'react';
import './CommentList.scss';
import { Comment } from '../../types';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comment: Comment[];
};

export const CommentList: React.FC<Props> = ({ comment }) => (
  <>
    <ul className="comment-list">
      {comment.map(comms => (
        <li key={comms.id}>
          <CommentInfo comment={comms} />
        </li>
      ))}
    </ul>
  </>
);
