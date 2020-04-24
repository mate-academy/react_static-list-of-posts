import React from 'react';
import PropTypes from 'prop-types';

const PostBody = ({ post }) => (
  <p className="post__text">
    {post.body}
  </p>
);

PostBody.propTypes = {
  post: PropTypes.shape({
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostBody;
