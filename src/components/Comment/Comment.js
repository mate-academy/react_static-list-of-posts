import React from 'react';
import './Comment.scss';

import { commentTypes } from '../../types';

export const Comment = ({ name, body, email }) => (
  <li className="comment-item">
    <p className="comment-item__name">{name}</p>
    <p>{body}</p>
    <p className="comment-item__email">{email}</p>
  </li>
);

Comment.propTypes = commentTypes.isRequired;
