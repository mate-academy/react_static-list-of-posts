import React from 'react';
import './CommentList.scss';
import { CommentsType } from '../../types';

import { Comment } from '../Comment/Comment';

export const CommentList = ({ comments }) => (
  <ul className="commentList">
    {comments.map(comment => (
      <Comment {...comment} key={comment.id} />
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: CommentsType.isRequired,
};
