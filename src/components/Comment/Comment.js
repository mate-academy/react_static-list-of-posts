import React from 'react';
import './Comment.scss';

import PropTypes from 'prop-types';

export const Comment = ({
  name,
  body,
  email,
}) => (
  <article className="comment">
    <p className="comment__name">
      {name}
    </p>

    <p className="comment__body">
      {body}
    </p>

    <p className="comment__email">
      {email}
    </p>
  </article>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
