import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = ({ name, postId, body, email, id }) => (
  <li className="comment" key={postId}>
    <h3>{name}</h3>
    <a href="mailto:ask@htmlbook.ru">{email}</a>
    <p>{body}</p>
  </li>
);

Comment.propTypes = {
  body: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  postId: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};
export default Comment;
