import React from 'react';
import { CommentShape } from '../../shapes/CommentShape';

import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <article className="comment">
    <h3 className="comment__author">
      {name}
    </h3>
    <p className="comment__body">
      {body}
    </p>
    <a href={email} className="comment__email">{email}</a>
  </article>
);

Comment.propTypes = CommentShape;
