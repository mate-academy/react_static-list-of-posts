import React from 'react';
import './CommentList.scss';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comment } from '../../react-app-env';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="list-group">
    <h3>Comments:</h3>
    {comments.map((comment: Comment) => (
      <li
        key={comment.id}
        className="list-group-item list-group-item-info"
      >
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
