import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import './Post.scss';

const Post = ({ title, body, user }) => (
  <div className="post-Container">
    <h1 className="post-Container__title">{title}</h1>
    <p className="post-Container__body">{body}</p>
    <User {...user} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({}).isRequired,
};

export default Post;
