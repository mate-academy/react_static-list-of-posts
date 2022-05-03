import React from 'react';

import { Comment } from '../types/Comment';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <p style={{ fontWeight: 'bold' }}>{`Comment from ${comment.email}`}</p>
    <p style={{ textDecoration: 'underline' }}>{comment.name}</p>
    <p>{comment.body}</p>
  </>
);
