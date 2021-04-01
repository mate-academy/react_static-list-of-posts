import React from 'react';
import PropTypes from 'prop-types';

import './post.scss';

export const Post = ({
  title,
  body,
}) => (
  <div className="post">
    <h3 className="post__title">
      {title}
    </h3>
    <p className="post__text">
      {body}
    </p>
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
