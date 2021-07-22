import React from 'react';
import { CommentType } from '../../types';

export const Comment = ({ name, body, email }) => (
  <ul>
    <li
      className="
        list-group-item
        list-group-item-action
        list-group-item-primary
      "
    >
      <strong>Name: </strong>
      {name}
    </li>
    <li
      className="
        list-group-item
        list-group-item-action
        list-group-item-primary
      "
    >
      <strong>Message: </strong>
      {body}
    </li>
    <li
      className="
        list-group-item
        list-group-item-action
        list-group-item-primary
      "
    >
      <strong>Email: </strong>
      {email}
    </li>
  </ul>
);

Comment.propTypes = CommentType;
