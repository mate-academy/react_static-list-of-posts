import React from 'react';
import PropTypes from 'prop-types';

export function Post({ post }) {
  return (
    <>
      <h1>
        {post.title}
      </h1>
      <p>
        {post.body}
      </p>
    </>
  );
}

Post.propTypes = {
  post: PropTypes.objectOf({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
