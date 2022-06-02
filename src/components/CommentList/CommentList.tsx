import React from 'react';
import './CommentList.scss';
import { Comment } from '../../react-app-env';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="comments">
    {comments.map(comment => (
      <li key={comment.id} className="conteiner">
        <CommentInfo comment={comment} />
      </li>
    ))}

  </ul>
);
