import React from 'react';
import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = (props) => {
  const { comment } = props;
  const { name, body, email } = comment;

  return (
    <div className="Info">
      <p className="Info__title">{`Title: ${name}`}</p>
      <p className="Info__comment">{`Comment: ${body}`}</p>
      <a className="Info__email" href={`mailto:${email}`}>{`Email: ${email}`}</a>
    </div>
  );
};
