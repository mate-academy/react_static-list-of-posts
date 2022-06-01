import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comment } from '../../react-app-env';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="message is-warning">
    <h3 className="message-header">comments:</h3>
    {comments.map(comment => (
      <li key={comment.id} className="box">
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
