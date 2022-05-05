import React from 'react';

import './CommentList.scss';

import { Comment } from '../../types/interfaces';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comment[] | null,
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="comments-list" data-cy="comments-list">
    <h3 className="comments-list__title">Comments:</h3>
    {comments
      ? comments.map(comment => (
        <div className="comments-list__item" key={comment.id}>
          <CommentInfo comment={comment} />
        </div>
      ))
      : 'No comments yet'}
  </div>
);
