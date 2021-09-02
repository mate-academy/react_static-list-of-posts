import React from 'react';
import './CommentInfo.scss';
import { Comment } from '../types/Comment';

type Props = {
  // eslint-disable-next-line react/require-default-props
  comment?: Comment;
};

export const CommentInfo: React.FC<Props> = (props) => {
  const { comment } = props;

  return (
    <div className="comment">
      {comment?.body}
      <br />
      Name:&nbsp;
      {comment?.name}
      <br />
      Email:&nbsp;
      {comment?.email}
    </div>
  );
};
