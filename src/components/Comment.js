import React from 'react';
import { CommentPropTypes } from './PropTypes';

export const Comment = ({ name, body, email }) => (
  <>
    <p>
      <strong>Name:</strong>
      {' '}
      {name}
      <br />
      <strong>Body:</strong>
      {' '}
      {body}
      <br />
      <strong>Email:</strong>
      {' '}
      {email}
      <br />
    </p>
    <hr />
  </>
);

Comment.propTypes = CommentPropTypes;
