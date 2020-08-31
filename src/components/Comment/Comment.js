import React from 'react';
import './Comment.css';
import { CommentShape } from '../Shape';

export const Comment = ({ name, body, email }) => (
  <>
    <p className="name">{name}</p>
    <p className="body">{body}</p>
    <p className="email">{email}</p>
  </>
);

Comment.propTypes = CommentShape.isRequired;
