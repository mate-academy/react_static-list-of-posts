import React from 'react';
import { CommentShape } from '../Shapes';
import './Comment.css';

export const Comment = ({ name, body, email }) => (
  <div className="post__comment">
    <h3>{name}</h3>
    <p>{`Comment: ${body}`}</p>
    <span>{`e-mail: ${email}`}</span>
  </div>
);

Comment.propTypes = CommentShape.isRequired;
