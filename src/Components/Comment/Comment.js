import React from 'react';
import { CommentTypes } from '../../types';

export const Comment = ({ name, body, email }) => (
  <>
    <h3>{name}</h3>
    <p>{`[${email}]`}</p>
    <span>
      {body}
    </span>
  </>
);

Comment.propTypes = CommentTypes.isRequired;
