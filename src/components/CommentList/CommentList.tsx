import React from 'react';

import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comment } from '../../types/Comment';

type Props = {
  comments: Comment[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="comments">
    {
      comments.map(comment => (
        <li key={comment.id} className="comments__comment">
          <CommentInfo
            name={comment.name}
            body={comment.body}
            email={comment.email}
          />
        </li>
      ))
    }
  </ul>
);
