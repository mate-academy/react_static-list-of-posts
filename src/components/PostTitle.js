import React from 'react';
import PropTypes from 'prop-types';

const PostTitle = ({ post }) => (
  <h2 className="post__title">{post.title}</h2>
);

PostTitle.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostTitle;
