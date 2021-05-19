import React from 'react';
import './CommentList.scss';
import { CommentsType } from '../../types';

import { Comment } from '../Comment/Comment';

export const CommentList = ({ comments }) => (
  <ul className="commentList">
    {comments.map(comment => (
      <li key={comment.id} className="commentList__comment">
        <Comment {...comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: CommentsType.isRequired,
};
