import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import { Comments } from '../Comments/Comments';

import './Post.css';

export const Post = ({ title, body, user, comments }) => (
  <li className="Post">
    <h2 className="Title">{title}</h2>
    <p className="PostBody">{body}</p>
    <User {...user} />
    <Comments comments={comments} />
  </li>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
