import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';
import User from '../User/User';

function Comment({
  key, name, body, email,
}) {
  return (
    <div className="comment" key={key}>
      <div>
        <p className="comment__text comment__name">{name}</p>
        <p className="comment__text comment__body">{body}</p>
      </div>
      <div className="comment__author">
        <User userEmail={email} />
      </div>
    </div>
  );
}

Comment.propTypes = {
  key: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Comment;
