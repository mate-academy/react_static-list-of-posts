import React from 'react';

import { typeComments } from '../../types';
import './Comment.scss';

export const Comment = ({ comment }) => (
  <div className="comment">
    <h4>{comment.name}</h4>
    <p>{comment.body}</p>
    <a href="https://www.gmail.com">{comment.email}</a>
  </div>
);

Comment.propTypes = {
  comment: typeComments.isRequired,
};
