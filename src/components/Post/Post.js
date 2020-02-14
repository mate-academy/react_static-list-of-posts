import React from 'react';
import PropTypes from 'prop-types';

export const Post = (props) => {
  const { title, body } = props;

  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
