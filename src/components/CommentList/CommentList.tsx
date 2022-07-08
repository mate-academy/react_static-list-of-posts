import React from 'react';

import './CommentList.scss';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="post__comments comments">
    {comments.map(comment => (
      <CommentInfo comment={comment} />
    ))}
  </ul>
);
