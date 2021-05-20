import React from 'react';
import PropTypes from 'prop-types';

import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <>
    <div className="App__comment">
      <p className="App__comment-name">
        {name}
      </p>

      <p>
        {body}
      </p>

      <a href={email}>
        {email}
      </a>
    </div>
  </>
);

Comment.defaultProps = {
  body: '',
  email: '',
};

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string,
  email: PropTypes.string,
};
