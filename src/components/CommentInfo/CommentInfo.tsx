import React from 'react';

import './CommentInfo.scss';

export const CommentInfo: React.FC<PostComment> = ({
  name,
  body,
  email,
}) => (
  <>
    <div className="item-name">{`Name: ${name}`}</div>
    <div className="item-email">{`Email: ${email}`}</div>
    <div className="item-body">{body}</div>
  </>
);
