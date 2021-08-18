import React from 'react';
import { TypeComment } from '../../types';
import './Comment.scss';

const Comment = ({ comment }) => {
  const { name, body, email } = comment;

  return (
    <div>
      <span className="comment__name">{name}</span>
      <p>{body}</p>
      <span className="comment__email">{email}</span>
    </div>
  );
};

Comment.propTypes = {
  comment: TypeComment.isRequired,
};

export { Comment };
