import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

export const Comment = ({ name, email, body }) => (
  <div className="commentList__comment comment">
    <h4 className="comment__userName">{name}</h4>
    <p className="comment__userEmail">
      <i>email: </i>
      {email}
    </p>
    <p className="comment__userMessage">{body}</p>
    <div className="comment__line" />
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
