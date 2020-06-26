import React from 'react';
import { ShapeComment } from '../Shapes/ShapeComment';
import './Comment.css';

export const Comment = ({ name, email, body }) => (
  <div className="comment">
    <div className="comment__name">
      {name}
    </div>
    <div className="comment__email">
      {email}
    </div>
    <div className="comment__body">
      {body}
    </div>
  </div>
);

Comment.propTypes = ShapeComment.isRequired;
