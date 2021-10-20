import React from 'react';
import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = props => {
  const { comment } = props;
  const { name, email, body } = comment;

  return (
    <div style={{
      border: '2px solid #FDA65D', padding: '10px', marginBottom: '10px', backgroundColor: '#99A799',
    }}
    >
      <div>{name}</div>
      <div>{email}</div>
      <div>{body}</div>
    </div>
  );
};
