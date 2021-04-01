import React from 'react';
import { commentType } from '../../Types/commentType';

import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <li className="comments-list__comment comment">
    <h3 className="comment__name">{name}</h3>
    <p className="comment__body">
      <i>
        {body}
      </i>
    </p>
    <p className="comment__email">{email}</p>
  </li>
);

Comment.propTypes = commentType;
