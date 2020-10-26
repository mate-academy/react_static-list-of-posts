import React from 'react';
import { CommentPropTypes } from '../PropTypes/CommentPropTypes';

import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <div>
    <h3 className="comment__title">{name}</h3>
    <p className="comment__text">{body}</p>
    <p className="comment__mail">{`from ${email}`}</p>
  </div>
);

Comment.propTypes = CommentPropTypes;
