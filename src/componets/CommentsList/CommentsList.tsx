import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comment } from '../../types/Comment';

import './CommentsList.scss';

type Props = {
  comments: Comment[];
};

export const CommentsList: React.FC<Props> = ({ comments }) => (
  <div className="comments">
    { comments.length
      ? comments.map(comment => (
        <CommentInfo commentInfo={comment} key={comment.id} />))
      : 'Be the first to comment!'}
  </div>
);
