import React from 'react';
import { Comment } from '../types/Comment';
import './ComponentsStyles.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = props => {
  const { comment } = props;
  const { name, email, body } = comment;

  return (
    <>
      <div>{`Name: ${name}`}</div>
      <div>{`Email: ${email}`}</div>
      <div>{`Body: ${body}`}</div>
    </>
  );
};
