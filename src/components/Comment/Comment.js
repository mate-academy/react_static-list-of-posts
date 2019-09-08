import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';
import User from '../User/User';

const Comment = ({ comment, key }) => {
  const { name, body, email } = comment;

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
};

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string,
    body: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  key: PropTypes.string.isRequired,
};

export default Comment;
