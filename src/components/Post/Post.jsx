import React from 'react';
import PropTypes from 'prop-types';

export const Post = ({
  title,
  body,
}) => (
  <>
    <h3>
      {title}
    </h3>
    <p>
      {body}
    </p>
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
