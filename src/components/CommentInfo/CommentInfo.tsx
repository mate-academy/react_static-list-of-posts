import React from 'react';

import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = (props) => {
  const { comment } = props;
  const { name, email, body } = comment;

  return (
    <>
      <div className="comment">
        <p className="comment__name">
          {name}
        </p>
        <p className="comment__body">
          {`"${body}"`}
        </p>
        <p className="comment__email">
          {email}
        </p>
      </div>
    </>
  );
};
