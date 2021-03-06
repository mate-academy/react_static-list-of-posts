import PropTypes from 'prop-types';
import React from 'react';
import User from '../User';

import './Post.scss';

export default function Post({
  title,
  body,
  user,
  comments,
}) {
  return (
    <li className="post__item">
      <h2 className="post__title">
        {title}
      </h2>
      <p className="post__body">
        {body}
      </p>
      <User
        {...user}
        comments={comments}
      />
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
