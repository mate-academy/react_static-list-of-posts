import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = ({ name, body, email }) => (
  <div className="comment">
    <h5 className="comment__name">{name}</h5>
    <p className="comment__body">{body}</p>
    <p>
      <a href={`mailto:${email}`} className="comment__email">
        {email}
      </a>
    </p>
  </div>

);

export default Comment;

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired.isRequired,
};
