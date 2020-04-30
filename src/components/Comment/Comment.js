import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

function Comment({ id, name, body, email }) {
  return (
    <div key={id} className="post__comments-list_comment">
      <p className="post__comments-list_comment-name">
        {name}
      </p>
      <p className="post__comments-list_comment-email">
        {email}
      </p>
      <p className="post__comments-list_comment-body">
        {body}
      </p>
    </div>
  );
}

export default Comment;

Comment.propTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}).isRequired;
