import React from 'react';
import { PostPropTypes } from './PropTypes';

export const Post = ({ title, body }) => (
  <>
    <h2>Post</h2>
    <p>
      <strong>Title:</strong>
      {' '}
      {title}
      <br />
      <strong>Body:</strong>
      {' '}
      {body}
    </p>
  </>
);

Post.propTypes = PostPropTypes;
