import React from 'react';
import PropTypes from 'prop-types';
import './post.css';

const Post = ({ post, user, children }) => (
  <article className="post__container">
    <h2 className="post__title">{post.title}</h2>
    <p className="post__body">{post.body}</p>
    <span className="post__author">{user.name}</span>
    {children}
  </article>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.func.isRequired,
};

export default Post;
