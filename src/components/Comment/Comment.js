import React from 'react';

import './Comment.scss';
import { CommentTypes } from '../PropTypes';

export const Comment = ({ name, body, email }) => (
  <>
    <h3 className="badge bg-primary rounded-pill title">
      {name}
    </h3>
    <p>{email}</p>
    <p>{body}</p>
  </>
);

Comment.propTypes = CommentTypes;
