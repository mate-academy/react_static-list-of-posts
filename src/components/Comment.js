import React from 'react';
import { commentShape } from '../shapes/commentShape';

export const Comment = ({ name, body, email }) => (
  <div className="post--comment">
    <p>{name}</p>
    <a className="post--email" href={`mailto:${email}`}>{email}</a>
    <p>{body}</p>
  </div>
);

Comment.propTypes = commentShape;
