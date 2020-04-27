import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

const Comment = ({ name, email, body }) => (
  <li className="post__comment-item">

    <div className="post__comment-name">
      {name}
    </div>
    <div className="post__comment-mail">
      <a href={`mailto:${email}`}>
        {email}
      </a>
    </div>
    <div className="post__comment-text">
      {body}
    </div>
  </li>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Comment;
