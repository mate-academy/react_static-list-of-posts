import React from 'react';

type Props = {
  comment: Comments;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <p className="Comment__name">{comment.name}</p>
    <p className="Comment__body">{comment.body}</p>
    <p className="Comment__email">{comment.email}</p>
  </>
);
