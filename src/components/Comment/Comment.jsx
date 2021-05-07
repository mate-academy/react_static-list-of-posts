import React from 'react';
import PropTypes from 'prop-types';

import './Comment.scss';

export const Comment = ({
  name,
  email,
  body,
}) => (
  <div className="Comment">
    <h4 className="Comment__title">
      {name}
    </h4>
    <div className="Comment__email">
      {email}
    </div>
    <p className="Comment__body">{body}</p>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  body: PropTypes.string,
};

Comment.defaultProps = {
  name: '',
  email: '',
  body: '',
};
