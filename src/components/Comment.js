import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ name, body, email }) => (
  <div>
    <h3>
      {name}
    </h3>
    <p>
      <a href={`mailot:${email}`}>
        {email}
      </a>
    </p>
    <p>
      {body}
    </p>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Comment;
