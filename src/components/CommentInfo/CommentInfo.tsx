import React from 'react';

import './CommentInfo.scss';

type Props = {
  comment: Comments;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const {
    name,
    email,
    body,
  } = comment;

  return (
    <div className="Comment">
      <p className="Comment__author">
        <strong>Author: </strong>
        {name}
      </p>
      <p className="Comment__mail">
        <strong>Email: </strong>
        {email}
      </p>
      <p className="Comment__text">
        {body}
      </p>
    </div>
  );
};
