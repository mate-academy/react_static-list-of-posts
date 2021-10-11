import React from 'react';

import './CommentInfo.scss';

type Props = {
  comment: Comments;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const {
    id,
    name,
    email,
    body,
  } = comment;

  return (
    <div className="Comment">
      <li className="Comment__item" key={id}>
        <p>
          <strong>Author: </strong>
          {name}
        </p>
        <p>
          <strong>Email: </strong>
          {email}
        </p>
        <p>
          {body}
        </p>
      </li>
    </div>
  );
};
