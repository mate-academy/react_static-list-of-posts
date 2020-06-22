import React from 'react';
import './Comment.css';
import { ShapeComment } from '../Shapes/ShapeComment';

export const Comment = ({ comment }) => (
  <div className="comment">
    <h3 className="comment__title">{comment.name}</h3>
    <p className="comment__text">{comment.body}</p>
    <a
      href={`mailto:${comment.email}`}
      className="comment__email"
    >
      {comment.email}
    </a>
  </div>
);

Comment.propTypes = ShapeComment.isRequired;
