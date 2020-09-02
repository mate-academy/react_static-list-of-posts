import React from 'react';
import { typeComment } from '../../types';
import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <div className="comment post__comment">
    <p className="comment__from">{`from ${email}`}</p>
    <h3 className="comment__name">{name}</h3>
    <p className="comment__body">{body}</p>
  </div>
);

Comment.propTypes = typeComment.isRequired;
