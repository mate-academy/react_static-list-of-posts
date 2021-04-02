import React from 'react';
import './post.scss';
import PropTypes from 'prop-types';

export const Post = ({
  title,
  body,
}) => (
  <>
    <h2 className="post__title">
      {title}
    </h2>
    <p className="post__body">
      {body}
    </p>
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
