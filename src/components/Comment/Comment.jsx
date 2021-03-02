import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

export const Comment = ({ name, email, body }) => (
  <div className="commentContainer">
    <div className="commentHeader">
      <p>
        {`${name} `}
        <strong>by</strong>
        {` ${email}`}
      </p>
    </div>
    <div className="commentBody">
      {body}
    </div>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
