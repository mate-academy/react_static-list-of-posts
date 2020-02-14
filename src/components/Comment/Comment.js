import React from 'react';
import './Comment.css';
import PropTypes from 'prop-types';

export const Comment = ({ comment: { name, email, body } }) => (

  <div className="comment">
    <h4 className="comment__name">
      {name}
    </h4>
    <div className="comment__email">
      {email}
    </div>
    <p className="comment__body">{body}</p>
  </div>
);

export const commentData = {
  name: PropTypes.string,
  email: PropTypes.string,
  body: PropTypes.string,
};

Comment.propTypes = {
  comment: PropTypes.shape(commentData).isRequired,
};
