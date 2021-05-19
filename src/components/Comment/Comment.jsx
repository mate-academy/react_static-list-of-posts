import React from 'react';
import PropTypes from 'prop-types';

import './Comment.scss';

const Comment = function({ id, name, body, email }) {
  return (
    <li key={id} className="Comment">
      <span>{`Name: ${name} Email: ${email}`}</span>
      <p>
        <b>Comment</b>
        :
        {' '}
        {body}
      </p>
    </li>
  );
};

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Comment;
