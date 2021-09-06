import React from 'react';
import './CommentInfo.scss';

type Props = {
  comments: Comment;
};

export const CommentInfo: React.FC<Props> = (props) => {
  const { comments } = props;

  return (
    <div className="comment">
      <p>
        User name:
        {' '}
        {comments.name}
      </p>
      <p>
        Comment:
        {' '}
        {comments.body}
      </p>
      <p>
        Email address:
        {' '}
        {comments.email}
      </p>
    </div>
  );
};
