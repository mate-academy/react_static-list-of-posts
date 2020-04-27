import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comm }) => (
  <div className="post__comment comment">
    <p className="comment__name">{comm.name}</p>
    <p className="comment__body">{comm.body}</p>
    <a href="gmail.com" className="comment__link">
      <p className="comment__email">{comm.email}</p>
    </a>
  </div>
);

Comment.propTypes = {
  comm: PropTypes.shape({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
