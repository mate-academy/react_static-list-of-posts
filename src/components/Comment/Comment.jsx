import React from 'react';
import PropTypes from 'prop-types';

import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <>
    <p className="comment__name">
      {name}
    </p>
    <p className="comment__body">
      {body}
    </p>
    <p className="comment__email">
      {`Email: ${email}`}
    </p>
  </>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
