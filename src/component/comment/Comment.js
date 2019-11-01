import React from 'react';
import PropTypes from 'prop-types';

function Comment(props) {
  return (
    <>
      {props.body}
      <br />
      {props.email}
    </>
  );
}

Comment.propTypes = {
  body: PropTypes.isRequired,
  email: PropTypes.isRequired,
};

export default Comment;
