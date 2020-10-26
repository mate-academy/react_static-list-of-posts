import React from 'react';
import './Comment.scss';

import { CommentShape } from '../../propTypes/CommentShape';

export const Comment = ({ name, body, email }) => (
  <div className="comment__item">
    <h3 className="comment__name">{name}</h3>
    <p className="comment__body">{body}</p>
    <p className="comment__email">{email}</p>
  </div>
);

Comment.propTypes = CommentShape.isRequired;
