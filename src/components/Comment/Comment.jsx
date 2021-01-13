import React from 'react';
import { commentType } from '../types';

const Comment = ({ name, body, email, id }) => (
  <li key={id}>
    <b>{name}</b>
    <br />
    {body}
    <br />
    <u>
      {email}
    </u>
    <br />
  </li>
);

Comment.propTypes = commentType.isRequired;

export default Comment;
