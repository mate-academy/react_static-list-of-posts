import React from 'react';
import './Comments.scss';
import PropTypes from 'prop-types';

const Comment = ({ name, body, email }) => (
  <div className="comment">
    <p>{body}</p>
    <p className="comment-info">
      {name}
      <br />
      {email}
    </p>
    <br />
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Comment;
