import React from 'react';
import PropTypes from 'prop-types';

import './Stats.scss';

export const Stats = ({ posts, comments, users }) => (
  <div className="stats">
    <p className="stats__item">
      <span>Posts: </span>
      {posts}
    </p>

    <p className="stats__item">
      <span>Comments: </span>
      {comments}
    </p>

    <p className="stats__item">
      <span>Users: </span>
      {users}
    </p>
  </div>
);

Stats.propTypes = {
  posts: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  users: PropTypes.number.isRequired,
};
