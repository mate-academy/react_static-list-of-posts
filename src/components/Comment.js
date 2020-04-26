import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

const Comment = ({ name, body, email }) => (
  <div className="comment">
    <p className="comment__name">
      {name}
    </p>
    <p className="comment__text">
      {body}
    </p>
    <p className="comment__email">
      <a href={`mailto:${email}`}>
        {email}
      </a>
    </p>

  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Comment;
