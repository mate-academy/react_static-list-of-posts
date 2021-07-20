import React from 'react';
import PropTypes from 'prop-types';

import './Post.css';

function Post({ posts }) {
  const { title, body } = posts;

  return (
    <div className="post">
      <h2 className="post-title">{`${title}`.toUpperCase()}</h2>
      <p>{`${body}`.toUpperCase()[0].substring(1)}</p>
    </div>
  );
}

Post.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Post;
