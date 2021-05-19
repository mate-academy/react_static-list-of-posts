import React from 'react';
import { CommentsType } from '../../types';
import { Comment } from '../Comment';

import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <ul className="coments-list">
    {comments.map(comment => (
      <li key={comment.id}>
        <Comment {...comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: CommentsType.isRequired,
};
