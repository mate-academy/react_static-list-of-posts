import React from 'react';
import PropTypes from 'prop-types';

function Post({ post }) {
  const { title, body } = post;

  return (
    <>
      <h1>{title}</h1>
      <p>{body}</p>
    </>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
};

export default Post;
