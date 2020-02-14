import React from 'react';
import PropTypes from 'prop-types';

export const Post = (props) => {
  const { title, body } = props;

  return (
    <div className="posts">
      <h2 className="subtitle is-4">{title}</h2>
      <p className="subtitle is-5">{body}</p>
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
