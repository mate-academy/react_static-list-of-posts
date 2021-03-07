import PropTypes from 'prop-types';
import React from 'react';
import User from '../User';

export default function Post({ title, body, user, comments }) {
  return (
    <li>
      <h2>{title}</h2>
      <p>{body}</p>
      <User {...user} comments={comments} />
    </li>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({}),
  comments: PropTypes.arrayOf(
    PropTypes.shape({}).isRequired,
  ),
};

Post.defaultProps = {
  user: {},
  comments: [],
};
