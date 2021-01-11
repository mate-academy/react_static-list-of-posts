import React from 'react';
import PropTypes from 'prop-types';

import './Comment.scss';

export const Comment = ({ cmts }) => (
  <p className="comment">
    <span className="comment_name">{cmts.name}</span>
    <br />
    <span className="comment_content">{cmts.body}</span>
    <br />
    <span className="comment_email">{cmts.email}</span>
  </p>
);

Comment.propTypes = {
  cmts: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.number.isRequired,
      PropTypes.string.isRequired,
      PropTypes.object.isRequired,
    ]),
  ).isRequired,
};
