import React from 'react';
import './Comment.scss';
import { commentPropType } from '../propTypes/comment';

export const Comment = (comments) => {
  const { name, body, email } = comments;

  return (
    <div className="comment">
      <h2 className="comment__heading">Comment</h2>
      <ul className="comment_list">
        <li>
          <strong>Name - </strong>
          {name}
        </li>
        <li>
          <strong>Body - </strong>
          {body}
        </li>
        <li>
          <strong>Email - </strong>
          {email}
        </li>
      </ul>
    </div>
  );
};

Comment.propTypes = commentPropType;
