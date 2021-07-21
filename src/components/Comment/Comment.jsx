import React from 'react';
import { commentPropTypes } from '../TypesOfProp';
import './Comment.scss';

export const Comment = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <div className="comment">
      <h3 className="comment__title">{name}</h3>
      <p className="comment__email">{email}</p>
      <p className="comment__body">
        <em>{`"${body}"`}</em>
      </p>
    </div>
  );
};

Comment.propTypes = commentPropTypes;
