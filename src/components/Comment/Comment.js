import React from 'react';
import { CommentType } from '../../types';

export const Comment = ({ name, email, body }) => (
  <li>
    {`${name}, <${email}> commented:`}
    <br />
    <p>{body}</p>
  </li>
);

Comment.propTypes = CommentType;
