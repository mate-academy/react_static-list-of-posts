import React from 'react';
import PropTypes from 'prop-types';

import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <div className="postComment">
    <p>
      <strong>
        {email}
      </strong>
    </p>
    <h3>
      {name}
    </h3>
    <div className="postComment__Body">
      {body}
    </div>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
