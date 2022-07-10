import React from 'react';

import './CommentInfo.scss';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <p>
      {`${comment.name}`}
    </p>
    <p>
      {`${comment.email}`}
    </p>
    <p>
      {comment.body}
    </p>
  </>
);
