import React from 'react';

import './CommentInfo.scss';

type Props = {
  comments: Comments;
};

export const CommentInfo: React.FC<Props> = ({ comments }) => (
  <div className="CommentInfo">
    <h3 className="CommentInfo__name">{comments.name}</h3>
    <span className="CommentInfo__email">{comments.email}</span>
    <p className="CommentInfo__body">{comments.body}</p>
    <br />
  </div>
);
