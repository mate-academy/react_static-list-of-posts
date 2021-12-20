import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comment } from '../../type/comment';
import './CommentList.scss';

export type Props = {
  comments: Comment[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="comment">
    {comments.map(commment => (
      <li key={commment.id} className="comment--item">
        <CommentInfo comment={commment} />
      </li>
    ))}
  </ul>
);
