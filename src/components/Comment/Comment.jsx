import React from 'react';
import './Comment.scss';
import PropTypes from 'prop-types';

function Comment({ name, body, email }) {
  return (
    <div className="comment">
      <p>{body}</p>
      <p className="comment-info">
        {name}
        <br />
        {email}
      </p>
      <hr />
    </div>
  );
}

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Comment;
