import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ cmts }) => (
  <>
    <p>
      <span>{cmts.name}</span>
      <br />
      <span>{cmts.body}</span>
      <br />
      <span>{cmts.email}</span>
      <br />
      <br />
      <br />
    </p>
  </>
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
