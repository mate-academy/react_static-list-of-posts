import React from 'react';

import { Comment } from '../../types';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comment[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="comments">
    {comments.map(comment => (
      <li key={comment.id} className="comments__comment">
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);

export default CommentList;
