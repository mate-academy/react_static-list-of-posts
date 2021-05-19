import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

function Comment({ comment }) {
  const { name, email, body } = comment;

  return (
    <div>
      <div className="comment__comm">{body}</div>
      <div className="border">
        <p className="comment__text-comm">{name}</p>
        <p className="comment__text-comm">
          {email}
        </p>
      </div>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.arrayOf({
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
};

export default Comment;
