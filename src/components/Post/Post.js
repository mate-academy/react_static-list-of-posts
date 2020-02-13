import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import { Comments } from '../Comments/Comments';

import './Post.css';

export const Post = ({ title, body, user, comments }) => (
  <li className="post">
    <h2 className="post__title">{title}</h2>
    <p className="post__body">{body}</p>
    <User {...user} />
    <Comments comments={comments} />
  </li>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.objectOf(
    PropTypes.object,
  ).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
