import React from 'react';
import { Comment } from '../types/Post';

type Props = {
  comment: Comment
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <li className="comment">
    <div className="comment-from">
      <p>
        {`Comment from user: ${comment.name}`}
      </p>
      <p>
        {`Email: ${comment.email}`}
      </p>
    </div>
    <p className="comment-body">
      {comment.body}
    </p>
  </li>
);
