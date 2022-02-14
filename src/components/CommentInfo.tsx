import React from 'react';

import { Comment } from '../types.ts/Comment';

export const CommentInfo: React.FC<Comment> = (comment) => (
  <>
    <i> Name - </i>
    {comment.name}
    <i> Body - </i>
    {comment.body}
    <i> Email - </i>
    {comment.email}
  </>

);
