import React from 'react';

import { Comment } from '../../types/Comments';
import { CommentInfo } from '../CommentInfo/CommentInfo';

import './CommentsList.scss';

type Props = {
  comments: Comment[] | null,
};

export const CommentsList: React.FC<Props> = ({ comments }) => (
  <ul className="commentList">
    <p className="commentList__title">Comments:</p>
    {comments
      ? comments.map(comment => (
        <CommentInfo comment={comment} />
      ))
      : 'No comments yet'}
  </ul>
);
