import React from 'react';
import { CommentShape } from '../shapes';

export const Comment = ({ name, body, email }) => (
  <>
    <span>{name}</span>
    <span>{`Email: ${email}`}</span>
    <p>{`Comment: ${body}`}</p>
  </>
);

Comment.propTypes = CommentShape.isRequired;
