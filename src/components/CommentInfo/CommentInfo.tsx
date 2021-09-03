import React from 'react';
import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const { name, body, email } = comment;

  return (
    <>
      <h3>
        {name}
      </h3>
      {body}
      <br />
      <span className="email">
        {'email address: '}
        <a href={`mailto:${email}`}>
          {email}
        </a>
      </span>
    </>
  );
};
