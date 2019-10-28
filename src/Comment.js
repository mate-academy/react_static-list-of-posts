import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment: { name, email, body } }) {
  return (
    <li className="nestedUl">
      <div>{body}</div>
      <div>{`Author: ${name}`}</div>
      <a href={`mailto: ${email}`}>
        {`Email ${name}`}
      </a>
    </li>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    body: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default Comment;
