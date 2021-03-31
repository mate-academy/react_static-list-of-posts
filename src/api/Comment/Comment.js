import React from 'react';
import PropTypes from 'prop-types';

import './Comment.scss';

export const Comment = ({ comment }) => {
  const { name, body, email } = comment;

  return (
    <div className="frame">
      <header className="name">
        {name}
      </header>
      <div className="body">
        <text>
          {body}
        </text>
      </div>
      <footer className="email">
        {email}
      </footer>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
