import React from 'react';

type Props = {
  comment: Comments;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <p>{comment.name}</p>
    <p>{comment.body}</p>
    <p>{comment.email}</p>
  </>
);
