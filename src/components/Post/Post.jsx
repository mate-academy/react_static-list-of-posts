import React from 'react';
import { postPropTypes } from '../proptypes';

export const Post = ({ title, body }) => (
  <div className="post__content">
    <h2>{title.toUpperCase()}</h2>
    <p>{`${body[0].toUpperCase()}${body.substring(1)}.`}</p>
  </div>
);

Post.propTypes = postPropTypes;
