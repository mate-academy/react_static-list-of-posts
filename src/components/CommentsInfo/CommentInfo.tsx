import React from 'react';

import { Comment } from '../types/Comment';

export const CommentInfo: React.FC<Comment> = ({
  name,
  email,
  body,
}) => (
  <>
    <h4>
      {`${name} (Email: ${email})`}
    </h4>

    <p>{body}</p>
  </>
);
