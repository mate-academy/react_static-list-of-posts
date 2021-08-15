import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ name, body, email }) => (
  <li>
    <div>
      {name}
    </div>
    <div>
      {body}
    </div>
    <div>
      {email}
    </div>
  </li>
);

Comment.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  body: PropTypes.string,
};

Comment.defaultProps = {
  name: 'no name',
  email: 'no email',
  body: 'no text',
};
