import React from 'react';
import PropTypes from 'prop-types';

import './CommentStyle.scss';

export const Comment = ({ name, email, body }) => (
  <>
    <div className="comment__title">
      {name}
    </div>
    <div className="comment__body">
      {body}
    </div>
    <div className="comment__email">{email}</div>
  </>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
