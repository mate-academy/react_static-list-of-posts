import React from 'react';
import './CommentList.scss';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comment } from '../../types/Comment';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul>
    <div>
      {comments.map(comment => (
        <li key={comment.postId}>
          <CommentInfo comment={comment} />
        </li>
      ))}
    </div>
  </ul>
);
