import React from 'react';
import './CommentInfo.scss';

export interface Comment {
  name: string,
  body: string,
  email: string,
}

type Props = {
  comment: Comment | null;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
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
