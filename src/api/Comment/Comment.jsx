import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = ({ name, body, email }) => (
  <>
    <div className="comment-name">
      {name}
    </div>
    <div className="comment-body">
      {body}
    </div>
    <div className="comment-email">
      {email}
    </div>
  </>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Comment;
