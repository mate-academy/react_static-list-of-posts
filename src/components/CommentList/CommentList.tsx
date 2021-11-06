import React from 'react';

import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';

import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="CommentList">
    <h3>Comments:</h3>
    {comments.map(comment => (
      <li key={comment.id} className="CommentList__comment">
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
