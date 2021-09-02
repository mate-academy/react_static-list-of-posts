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
      <h3>
        {name}
      </h3>
      {body}
      <br />
      <span className="commentator-email">
        {'Write to the commentator: '}
        <a href={`mailto:${email}`}>
          {email}
        </a>
      </span>
    </>
  );
};
