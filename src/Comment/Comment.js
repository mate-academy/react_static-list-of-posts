/* eslint-disable react/jsx-one-expression-per-line */
/* Added the above line to make JSX lines be visually more understandable */

import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ name, body, email }) => (
  <>
    <p className="singleComment__name">
      Title: {name}
    </p>
    <p className="singleComment__body">
      {body}
    </p>
    <p className="singleComment__email">
      E-mail: {email}
    </p>
  </>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Comment;
