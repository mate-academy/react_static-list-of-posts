import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ com }) => (
  <li className="post__comment">
    <p>{com.name}</p>
    <p>{com.email}</p>
    <p>
      {com.body}
    </p>
  </li>
);

Comment.propTypes = PropTypes.arrayOf({}).isRequired;
