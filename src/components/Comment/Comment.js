import React from 'react';
import './Comment.css';
import PropTypes from 'prop-types';

function Comment({ comment }) {
  const { name, body, email } = comment;
  const user = comment.user ? comment.user.name : 'Guest';

  return (
    <ul className="list-group-item list-group-item-info comment">
      <p className="list-group-item list-group-item-info comment__head">
        {name}
      </p>
      <p className="list-group-item list-group-item-info comment__body">
        {body}
      </p>
      <p className="list-group-item list-group-item-info comment__user-info">
        {`user: ${user} (${email})`}
      </p>
    </ul>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string,
    body: PropTypes.string,
    email: PropTypes.string,
    user: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default Comment;
