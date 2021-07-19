import React from 'react';
import propTypes from 'prop-types';

export const Post = ({ part }) => (
  <>
    <li className="title">{part.title}</li>
    <li className="body">{part.body}</li>
  </>
);

Post.propTypes = {
  part: propTypes.shape({
    title: propTypes.string.isRequired,
    body: propTypes.string.isRequired,
  }).isRequired,
};
