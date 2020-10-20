import React from 'react';
import { CommentShape } from '../shapes/CommentShape';
import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <div className="Comment">
    <h5 className="Comment__name">{name}</h5>
    <p className="Comment__body">{body}</p>
    <a className="Comment__email" href={`mailto:${email}`}>{email}</a>
  </div>
);

Comment.propTypes = CommentShape;
