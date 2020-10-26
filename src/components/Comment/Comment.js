import React from 'react';
import './Comment.scss';
import { CommentShape } from '../../shapes/CommentShape';

export const Comment = ({ name, body, email }) => (
  <>
    <h3 className="comment__name">{name}</h3>
    <p className="comment__body">{body}</p>
    <i className="comment__email">{email}</i>
  </>
);

Comment.propTypes = CommentShape;
