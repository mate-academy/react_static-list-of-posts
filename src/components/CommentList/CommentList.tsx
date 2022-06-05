import React from 'react';
import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../app.typedef';

interface Props {
  comments: Comment[];
}

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="commentsList">
    {comments.map(comment => {
      return (
        <li className="commentsList__item" key={comment.id}>
          <CommentInfo comment={comment} />
        </li>
      );
    })}
  </ul>
);
