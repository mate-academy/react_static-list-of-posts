import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ post }) => (
  <div className="post">
    <h2 className="post__title">{post.title}</h2>
    <p className="post__body">{post.body}</p>
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
};

export default Post;
