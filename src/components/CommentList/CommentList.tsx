import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comment } from '../../types/Comment';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="comments" data-cy="comment-list">
    {comments.map(comment => (
      <CommentInfo
        comment={comment}
        key={comment.id}
      />
    ))}
  </ul>
);
