import React from 'react';
import PropTypes from 'prop-types';

export const CommentList = (com) => (
  <>
    <h3>{com.name}</h3>
    <p>{com.body}</p>
    <p className="email">{com.email}</p>
  </>
);

CommentList.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
