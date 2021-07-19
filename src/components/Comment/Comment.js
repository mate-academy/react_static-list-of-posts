import React from 'react';
import PropTypes from 'prop-types';

import './Comment.scss';

const Comment = ({ name, body, email }) => (
  <>
    <h3 className="badge bg-primary rounded-pill title">
      {name}
    </h3>
    <p>{email}</p>
    <p>{body}</p>
  </>
);

Comment.propTypes = {
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Comment;
