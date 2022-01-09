import React from 'react';

import { Comment } from '../types/Comment';

type Props = {
  comment: Comment[],
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    {comment.map(com => (
      <>
        <li key={com.id}>
          <p style={{ fontWeight: 'bold' }}>{`Comment from ${com.email}`}</p>
          <p style={{ textDecoration: 'underline' }}>{com.name}</p>
          <p>{com.body}</p>
        </li>
      </>
    ))}
  </>
);
