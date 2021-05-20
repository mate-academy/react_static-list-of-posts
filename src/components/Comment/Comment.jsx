import React from 'react';
import PropTypes from 'prop-types';

import './Comment.scss';

const Comment = ({ name, body, email }) => (
  <>
    <h4>
      {name}
    </h4>
    <p>
      {body}
    </p>
    <p>
      <i>{email}</i>
    </p>
  </>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Comment;
