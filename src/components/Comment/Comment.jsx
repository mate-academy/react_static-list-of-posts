import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

export const Comment = ({
  name,
  email,
  body,
}) => (
  <div className="comment">
    <div className="comment__name">
      {name}
    </div>
    <div className="comment__email">
      {email}
    </div>
    <div className="comment__body">
      {body}
    </div>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
