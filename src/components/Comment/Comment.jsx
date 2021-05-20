import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ name, body, email }) => (
  <div className="comment">
    <div className="comment-info">
      <div className="comment-name">
        {email}
      </div>
      <div className="comment-body">
        {name}
      </div>
    </div>
    <p>
      {body}
    </p>
  </div>

);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
