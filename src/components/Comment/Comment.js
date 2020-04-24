import React from 'react';
import './Comment.css';
import PropTypes from 'prop-types';

const Comment = ({ name, body, email }) => (
  <>
    <p className="CommentList__name">
      <em>{name}</em>
    </p>

    <p className="CommentList__body">
      {body}
    </p>

    <a href={`mailto:${email}`} className="CommentList__email">
      {email}
    </a>
  </>
);

export default Comment;

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
