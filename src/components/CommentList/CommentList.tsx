import React from 'react';
import { Comment } from '../../interfaces/Comment';
import { CommentInfo } from '../CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Array<Comment>;
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="commentList">
    {comments.map(comment => (
      <li className="commentList__item" key={comment.id}>
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
