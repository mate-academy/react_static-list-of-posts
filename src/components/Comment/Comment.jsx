import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ cmts }) => (
  <h4>Comment</h4>
);

Comment.propTypes = {
  cmts: PropTypes.objectOf(PropTypes.object).isRequired,
};
