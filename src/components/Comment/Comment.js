import React from 'react';
import { CommentsTypes } from '../Shape/CommentsTypes';

export const Comment = props => (
  <>
    <li className="comments__item comments__item--name">
      {props.name}
    </li>
    <li className="comments__item comments__item--email">
      {props.body}
    </li>
    <li className="comments__item comments__item--address">
      {props.email}
    </li>
  </>
);

Comment.propTypes = CommentsTypes;
