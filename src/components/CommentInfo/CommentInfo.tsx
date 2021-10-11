import React from 'react';
import './CommentInfo.scss';

type Props = {
  comments: Comment;
};

export const CommentInfo: React.FC<Props> = (props) => {
  const { comments } = props;

  return (
    <div className="card card--comment">
      <p className="card-text card-text--comment">
        {`User name: ${comments.name}`}
      </p>
      <p className="card-text card-text--comment">
        {`Comment: ${comments.body}`}
      </p>
      <p className="card-text card-text--comment">
        {`Email address: ${comments.email}`}
      </p>
    </div>
  );
};
