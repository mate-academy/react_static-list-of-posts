import React from 'react';

import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = (props) => {
  const { comment } = props;

  const {
    name,
    body,
    email,
  } = comment;

  return (
    <>
      <div className="user-info">
        <div className="user-info__wrapper">
          <p className="user-info__title">
            {name}
          </p>
          <p>
            {email}
          </p>
        </div>
      </div>

      <div className="comments__text">
        {body}
      </div>
    </>
  );
};
