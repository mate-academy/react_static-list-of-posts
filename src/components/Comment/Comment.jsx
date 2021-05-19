import React from 'react';
import './Comment.scss';
import PropTypes from 'prop-types';

export const Comment = ({ commentItem }) => (
  <div className="comment">
    <div className="comment__info">
      {`Author: ${commentItem.name}`}
      <br />
      {`Email: ${commentItem.email}`}
      <br />
      {commentItem.body}
    </div>
  </div>
);

Comment.propTypes = {
  commentItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
