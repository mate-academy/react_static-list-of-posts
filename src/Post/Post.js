import React from 'react';
import PropTypes from 'prop-types';

import './Post.css';

const Post = ({ title, body }) => (
  <li className="post">
    <h2>{title}</h2>
    <p>{body}</p>
  </li>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
