import React from 'react';

import { Comment } from './Comment';

export const CommentList = ({ ...comment }) => (
  <li>
    <Comment {...comment} />
  </li>
);
