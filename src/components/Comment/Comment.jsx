import React from 'react';
import PropTypes from 'prop-types';

import './Comment.scss';

const Comment = function({ name, body, email }) {
  return (
    <div className="Comment">
      <span>{`Name: ${name} Email: ${email}`}</span>
      <p>
        <b>Comment: </b>
        {body}
      </p>
    </div>
  );
};

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Comment;
