import React from 'react';
import { CommentShape } from '../Shape';
import './Comment.css';

export const Comment = props => (
  <>
    <p className="comment__name">
      {props.name}
    </p>
    <p className="comment__email">
      {props.email}
    </p>
    <p>
      {props.body}
    </p>
  </>
);

Comment.propTypes = CommentShape.isRequired;
