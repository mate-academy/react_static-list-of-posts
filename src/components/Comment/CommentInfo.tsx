import React from 'react';
import { Comment } from '../../types/Comment';
import './Comment.scss';

type Props = {
  comment: Comment
};

export const CommentInfo: React.FC<Props> = (props) => {
  const { comment } = props;
  const { name, email, body } = comment;

  return (
    <>
      <h4 className="comment__title">
        {name}
      </h4>
      <p className="comment__email">
        {`By: ${email}`}
      </p>
      <p className="comment__text">
        {body}
      </p>
    </>
  );
};
