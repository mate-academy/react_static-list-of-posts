import React from 'react';
import { Comment } from '../../react-app-env';
import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = (props) => {
  const { comment } = props;

  return (
    <>
      <span className="comments-list__author">
        {`User ${comment.email} commented: `}
      </span>
      {comment.body}
    </>
  );
};
