import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ item }) => {
  const { title, body } = item;

  return (
    <>
      <h1>
        {title}
      </h1>
      <p>
        {body}
      </p>
    </>
  );
};

Post.propTypes = {
  item: PropTypes.string.isRequired,
};

export default Post;
