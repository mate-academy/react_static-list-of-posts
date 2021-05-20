import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';

const Post = ({ title, body, user }) => (
  <div className="Post__body">
    <h2 className="Post__title">
      {title}
    </h2>

    <p className="Post__text">
      {body}
    </p>

    <User {...user} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape().isRequired,
};

export default Post;
