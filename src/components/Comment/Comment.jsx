import React from 'react';
import './Comment.scss';
import { CommentListShape } from '../propTypes/comment';

export const Comment = (comments) => {
  const { name, body, email } = comments;

  return (
    <li className="comment">
      <h2 className="comment__heading">Comment</h2>
      <p className="comment__name">
        <strong>Name - </strong>
        {name}
      </p>
      <p className="comment__body">
        <strong>Body - </strong>
        {body}
      </p>
      <p className="comment__email">
        <strong>Email - </strong>
        {email}
      </p>
    </li>
  );
};

Comment.propTypes = CommentListShape;
