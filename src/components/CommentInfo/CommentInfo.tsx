import React from 'react';

import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = (props) => {
  const { comment } = props;
  const { name, body, email } = comment;

  return (
    <>
      <div className="comment__author author">
        <div className="author__name">
          {name}
        </div>
        <div className="author__email">
          {email}
        </div>
      </div>
      <div className="comment__body">
        {body}
      </div>
    </>
  );
};
