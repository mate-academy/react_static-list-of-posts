import React from 'react';

import { Comment } from '../../api/types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ol className="message">
    {comments?.map(comment => (
      <li key={comment.id} className="message-body">
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ol>
);
