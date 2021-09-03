import React from 'react';
import { Comment } from '../../react-app-env';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = (props) => {
  const { comment } = props;

  return (
    <>
      {`User ${comment.email} commented:
      ${comment.body}`}
    </>
  );
};
