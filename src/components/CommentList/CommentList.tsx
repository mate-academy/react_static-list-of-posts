import React from 'react';
import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../app.typedef';

interface Props {
  comments: Comment[];
}

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul>
    {comments.map(comment => {
      return (
        <p key={comment.id}>
          <CommentInfo comment={comment} />
        </p>
      );
    })}
  </ul>
);
