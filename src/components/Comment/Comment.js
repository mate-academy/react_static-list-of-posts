import React from 'react';
import PropTypes from 'prop-types';

export const Comment = (props) => {
  const { comment } = props;

  return (
    <li className="wrapper__list">
      <p className="wrapper__list-head">{comment.name}</p>
      <p>{comment.email}</p>
      <p>{comment.body}</p>
    </li>
  );
};

Comment.propTypes = {
  comment: PropTypes.objectOf(PropTypes.string).isRequired,
};
