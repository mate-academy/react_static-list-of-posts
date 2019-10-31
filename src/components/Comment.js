import React from 'react';
import PropTypes from 'prop-types';

export default function Comment(props) {
  return (
    <>
      <p>
        {'Comment: '}
        {props.comment.name}
      </p>
      <p>{props.comment.email}</p>
    </>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};
