import React from 'react';
import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment[],
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    {comment.map(com => (
      <li key={com.id}>
        <p>{`${com.name} - ${com.email}`}</p>
        <p>{com.body}</p>
      </li>
    ))}
  </>
);
