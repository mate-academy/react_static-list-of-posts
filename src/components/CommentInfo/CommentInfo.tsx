import React from 'react';

export const CommentInfo:React.FC<PostComment> = ({
  name,
  body,
  email,
}) => (
  <>
    <h3 className="Comment__person">{name}</h3>
    <p className="Comment__email">{email}</p>
    <p className="Comment__body">{body}</p>
  </>
);
