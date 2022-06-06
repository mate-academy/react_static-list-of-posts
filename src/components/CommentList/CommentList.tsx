import React from 'react';
import './CommentList.scss';
import { Comment } from '../../app.typedef';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="comments-list">
    {comments.map(comment => {
      return (
        <li key={comment.id}>
          <CommentInfo comment={comment} />
        </li>
      );
    })}
  </ul>
);
